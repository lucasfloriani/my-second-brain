import dashify from "dashify";
import { readdirSync, readFileSync, statSync } from "fs";
import { compose } from "ramda";
import removeMarkdown from "remove-markdown";
import SummaryTool from "node-summary";

export const getFilesInFolder = (folderPath: string): string[] =>
  readdirSync(folderPath).filter((fileName) => fileName !== "Assets");

const getFileContent = (filePath: string): string =>
  readFileSync(filePath).toString();

const getFileTitle = (fileContent: string, filePath: string): string => {
  const markdownFileName = filePath
    .split("/")
    .at(-1)!
    .replace(".md", "")
    .replace(":", "");
  const maybeTitles = /^#(.)+/.exec(fileContent);
  const rawTitle = maybeTitles?.[0] ?? markdownFileName;
  return rawTitle.replace("#", "").replace(":", "").trim();
};

const parseDateOrMonth = (number: number): string =>
  number > 9 ? `${number}` : `0${number}`;

const getFileDate = (filePath: string): string => {
  const data = statSync(filePath);
  const { birthtime } = data;

  const date = parseDateOrMonth(birthtime.getDate());
  const month = parseDateOrMonth(birthtime.getMonth() + 1);
  const year = birthtime.getFullYear();
  return `${year}-${month}-${date}`;
};

const getFileTags = (fileContent: string): string[] => {
  const tagsString = fileContent.split("##### Tags")[1].trim();
  const tags = tagsString
    ? tagsString
        .split(",")
        .map((tagString) => tagString.replace("#", "").trim())
        .filter((tag) => !!tag)
    : [];
  return tags;
};

const getIfFileIsDraft = (fileContent: string): boolean =>
  !(fileContent.includes("#read") && fileContent.includes("#withResume"));

const getFileSummary = (title: string, fileContent: string): string => {
  const plainText = removeMarkdown(fileContent);
  const cleanContent = replaceWithRegex(regexMarkdownImage, (match: string) => [
    match,
    "",
  ])(plainText);

  let summary = "";
  SummaryTool.summarize(title, cleanContent, (err, contentSummary) => {
    if (err) throw err;
    summary = contentSummary;
  });

  return summary
    .replace(title, "")
    .trim()
    .replace(/:/g, "")
    .replace(/\.\./g, ".")
    .split(/\n/)
    .join(". ")
    .trim()
    .slice(0, 200)
    .concat("...");
};

const generateMarkdownHeader = ({
  title,
  date,
  tags,
  draft,
  summary,
}: {
  title: string;
  date: string;
  tags: string[];
  draft: boolean;
  summary: string;
}) => {
  return `---
title: ${title}
date: '${date}'
tags: [${tags.map((tag) => `'${tag}'`).join(", ")}]
draft: ${draft}
summary: ${summary}
description: ${summary}
---`;
};

interface FormatMatch {
  (match: string, index: number): [string, string];
}

const replaceWithRegex =
  (regex: RegExp | string, formatMatch: FormatMatch) =>
  (fileContent: string): string => {
    const matches = fileContent.match(regex);
    const searchTerm =
      "TS Pattern - Prevent new types not being check by pattern matching without throwing an error";
    if (fileContent.includes(searchTerm)) {
      console.log(fileContent);
    }
    return matches
      ? matches
          .map((match, index) => formatMatch(match, index))
          .reduce(
            (formattedContent, [match, newValue]) =>
              formattedContent.replace(match, newValue),
            fileContent
          )
      : fileContent;
  };

const regexMarkdownImage = /^!\[\[(.)+[^.mp4]\]\]$/gm;

const getReplaceImagesContent = () => {
  const replaceImagesContent = replaceWithRegex(
    regexMarkdownImage,
    (match, index) => {
      const mdxStart = "![[";
      const mdxEnd = "]]";

      const fileName = match
        .replace(mdxStart, "")
        .replace(mdxEnd, "")
        .split("/")
        .at(-1)!;

      const fileNameWithoutExtension = fileName.split(".").at(0)!;
      const fileExtension = fileName.split(".").at(-1)!;
      const newImageFileName = dashify(fileNameWithoutExtension, {
        condense: true,
      });
      const newValue = `![Fallback text ${
        index + 1
      }](/static/assets/${newImageFileName}.${fileExtension})\n`;

      return [match, newValue];
    }
  );
  return replaceImagesContent;
};

const getReplaceLinksContent = () => {
  const linkRegex = /^\[(.)+\]\((.)+\)$/gm;
  const replaceLinksContent = replaceWithRegex(linkRegex, (match: string) => [
    match,
    `${match}\n`,
  ]);
  return replaceLinksContent;
};

const removeTitleFromContent =
  (title: string) =>
  (fileContent: string): string => {
    const markdownH1 = `# ${title}`;
    const contentWithoutTitle = fileContent.includes(markdownH1)
      ? fileContent.split(markdownH1)[1]
      : fileContent;
    return contentWithoutTitle;
  };

const removeTasksSection = (fileContent: string): string => {
  const metadataKey = fileContent.includes("#### Tasks")
    ? "#### Tasks"
    : /- \[[x]?\] Read/;
  const formattedContent = fileContent.split(metadataKey)[0];
  return formattedContent;
};

const removeTagsSection = (fileContent: string): string => {
  const formattedContent = fileContent.split("##### Tags")[0];
  return formattedContent;
};

const placeHeadersInContent =
  (header: string, title: string) =>
  (fileContent: string): string => {
    const content = `${header}\n\n# ${title}\n\n${fileContent}`;
    return content;
  };

const fixSpacingInContent = (fileContent: string): string => {
  return fileContent.replace(/(\n){3,}/g, "\n\n").trim();
};

export const getParsedFileContent = (filePath: string) => {
  const fileContent = getFileContent(filePath);
  const title = getFileTitle(fileContent, filePath);
  const date = getFileDate(filePath);
  const tags = getFileTags(fileContent);
  const draft = getIfFileIsDraft(fileContent);
  const summary = getFileSummary(title, fileContent);

  const header = generateMarkdownHeader({
    title: title,
    date,
    tags,
    draft,
    summary,
  });

  return compose(
    fixSpacingInContent,
    placeHeadersInContent(header, title),
    removeTitleFromContent(title),
    removeTasksSection,
    removeTagsSection,
    getReplaceLinksContent(),
    getReplaceImagesContent()
  )(fileContent);
};
