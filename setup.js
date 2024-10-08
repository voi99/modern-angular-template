const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askProjectName = () => {
  rl.question("Enter your project name: ", (projectName) => {
    if (!projectName.trim()) {
      console.error("Project name cannot be empty. Please try again.");
      askProjectName();
    } else {
      const replacePlaceholders = (filePath, placeholders) => {
        let content = fs.readFileSync(filePath, "utf8");
        for (const [placeholder, value] of Object.entries(placeholders)) {
          content = content.replace(new RegExp(placeholder, "g"), value);
        }
        fs.writeFileSync(filePath, content, "utf8");
      };

      const placeholders = {
        __PROJECT_NAME__: projectName,
      };

      replacePlaceholders("package.json", placeholders);
      replacePlaceholders("angular.json", placeholders);

      console.log("Project setup complete!");
      rl.close();
    }
  });
};

askProjectName();
