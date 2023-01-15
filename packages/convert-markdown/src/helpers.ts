import dashify from "dashify";
import { readdirSync, readFileSync } from "fs";

export const getFilesInFolder = (folderPath: string): string[] =>
  readdirSync(folderPath).filter((fileName) => fileName !== "Assets");

export const getFileContent = (filePath: string) => {
  const fileBuffer = readFileSync(filePath);
  const fileContent = fileBuffer.toString();

  const fallbackTitle = filePath
    .split("/")
    .at(-1)!
    .replace(".md", "")
    .replace(":", "");
  const maybeTitles = /^#(.)+/.exec(fileContent);
  const rawTitle = maybeTitles?.[0] ?? "";
  const title = rawTitle.replace("#", "").replace(":", "").trim();

  // TODO: Implement date
  const date = "2016-03-08";

  const tagsString = fileContent.split("##### Tags")[1].trim();
  const tags = tagsString
    ? tagsString
        .split(",")
        .map((tagString) => tagString.trim().replace("#", ""))
    : [];

  const draft =
    fileContent.includes("#read") && fileContent.includes("#withResume");

  // TODO: Implement summary
  const summary = "Implement it";

  const header = generateMarkdownHeader({
    title: title || fallbackTitle,
    date,
    tags,
    draft,
    summary,
  });

  const contentWithoutTitle = rawTitle
    ? fileContent.split(rawTitle)[1]
    : fileContent;

  const regexMarkdownImage = /!\[\[(.)+[^.mp4]\]\]/g;
  const newContent = contentWithoutTitle
    .match(regexMarkdownImage)
    ?.map((match, index) => {
      const hasAssetsPrefix = match.startsWith("![[Assets");

      const mdxStart = "![[";
      const newMdxStart = hasAssetsPrefix
        ? "![Fallback text](/static/"
        : "![Fallback text](/static/Assets/";
      const mdxEnd = "]]";
      const newMdxEnd = ")";

      const fileName = match
        .replace(newMdxStart, "")
        .replace(mdxEnd, "")
        .split("/")
        .at(-1)!;

      //TODO: update copy assets to dashify file names
      const fileNameWithoutExtension = fileName.split(".").at(0)!;
      const fileExtension = fileName.split(".").at(-1)!;
      const newImageFileName = dashify(fileNameWithoutExtension, {
        condense: true,
      });
      const newValue = `![Fallback text ${
        index + 1
      }](/static/assets/${newImageFileName}.${fileExtension}${newMdxEnd}\n`;

      return [match, newValue];

      // const newValue = match
      //   .replace(mdxStart, newMdxStart)
      //   .replace(mdxEnd, newMdxEnd);
      // return [match, newValue];
    })
    .reduce((newContent, [match, newValue]) => {
      return newContent.replace(match, newValue);
    }, contentWithoutTitle);

  const data = newContent || contentWithoutTitle;
  const metadataKey = data.includes("#### Tasks")
    ? "#### Tasks"
    : /- \[[x]?\] Read/;
  const formattedContent = data.split(metadataKey)[0];

  const content = `${header}\n${rawTitle}\n\n${formattedContent}`;
  return content;
};

export const generateMarkdownHeader = ({
  title,
  date,
  tags,
  draft,
  summary,
}: {
  title: string;
  date: string; // 2016-03-08
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
