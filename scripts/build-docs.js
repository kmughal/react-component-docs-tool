// Global packages //
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const chalk = require("chalk").default;
const log = console.log;
const ReadDir = promisify(fs.readdir);
const { readFileSync, writeFileSync, readdirSync } = fs;
const reactDocs = require("react-docgen");

// Global variables //
const COMPONENT_BASE_PATH = path.resolve(__dirname, `../src/components`);
const COMPONENT_SRC_PATH = path.resolve(__dirname, `../src/components/#/#.js`);
const COMPONENT_EXAMPLES_BASE_PATH = path.resolve(
  __dirname,
  `../src/docs/examples/#`
);
const COMPONENT_EXAMPLES_SRC_PATH = path.resolve(
  __dirname,
  `../src/docs/examples/1/2`
);
const META_DATA_PATH = path.resolve(
  __dirname,
  `../src/config/component-metadata.js`
);

// Public method
ReadDir(COMPONENT_BASE_PATH)
  .then(readComponents)
  .catch(e => console.log("error: ", e));

// Helper methods.
function readComponents(output) {
  const contentInfo = [];
  console.clear();
  console.time("Generating Components Metadata");
  log(chalk.green());
  log(chalk.cyan(`Discovered ${output.length} components.`));
  for (let item of output) {
    log(chalk.cyan(`Generating metadeta for: ${item}`));
    let src = replacePlaceholderWithValue(COMPONENT_SRC_PATH, item);
    let contents = readCompnentsAsText(src);

    let info = reactDocs.parse(contents);
    info.code = contents;
    info.examples = generateExamplesMetadata(item);
    log(chalk.cyan(`Found ${info.examples.length} examples`));
    contentInfo.push(info);
  }

  if (contentInfo.length > 0) writeCompnonentMetadata(contentInfo);
  log(chalk.green("Metadata generated for the components"));
  console.timeEnd("Generating Components Metadata");
}

const generateExamplesMetadata = componentName => {
  const fullPathForTheComponentExamples = replacePlaceholderWithValue(
    COMPONENT_EXAMPLES_BASE_PATH,
    componentName
  );
  const examples = readdirSync(fullPathForTheComponentExamples);

  const EXAMPLE_SRC_PATH_TEMPLATE = COMPONENT_EXAMPLES_SRC_PATH.replace(
    "1",
    componentName
  );
  const result = [];
  for (let example of examples) {
    const fullPathForTheExample = EXAMPLE_SRC_PATH_TEMPLATE.replace(
      "2",
      example
    );
    const contents = readCompnentsAsText(fullPathForTheExample);
    result.push({
      src: fullPathForTheExample,
      displayName: path.parse(example).name,
      contents
    });
  }
  return result;
};

const readCompnentsAsText = componentFilePath =>
  readFileSync(componentFilePath, { encoding: "utf-8" });

const writeCompnonentMetadata = contents => {
  const template = `module.exports=${JSON.stringify(contents)}`;
  writeFileSync(META_DATA_PATH, template);
};

const replacePlaceholderWithValue = (srcPath, value) =>
  srcPath.replace(/#/g, value);
