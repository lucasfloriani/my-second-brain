import { copyFile, writeFile } from "fs";
import dashify from "dashify";
import { getParsedFileContent, getFilesInFolder } from "./helpers";

const main = () => {
  const markdownDir = __dirname + "/../../obsidian";
  const fileNames = getFilesInFolder(markdownDir);

  const blacklist = [".obsidian"];
  fileNames
    .filter((fileName) => !blacklist.includes(fileName))
    .forEach((fileName) => {
      const path = `${markdownDir}/${fileName}`;
      const content = getParsedFileContent(path);
      const dashfileName = dashify(fileName.slice(0, -3), { condense: true });
      const newPath =
        __dirname + "/../../../apps/blog/data/blog/" + dashfileName + ".md";
      writeFile(newPath, content, (err) => {
        if (err) throw err;
        console.log(`${fileName} was created`);
      });
    });

  const markdownAssetsDir = __dirname + "/../../obsidian/Assets";
  const assetsNames = getFilesInFolder(markdownAssetsDir);

  assetsNames.forEach((assetName) => {
    const path = `${markdownAssetsDir}/${assetName}`;
    const fileNameWithoutExtension = assetName.split(".").at(0)!;
    const fileExtension = assetName.split(".").at(-1)!;
    const dashifiedFileName = dashify(fileNameWithoutExtension, {
      condense: true,
    });
    const newFileName = `${dashifiedFileName}.${fileExtension}`;
    const newPath =
      __dirname + "/../../../apps/blog/public/static/assets/" + newFileName;
    // File destination.txt will be created or overwritten by default.
    copyFile(path, newPath, (err) => {
      if (err) throw err;
    });
  });
};

main();
