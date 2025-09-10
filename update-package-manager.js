const fs = require("fs");
const readline = require("readline");
const { spawn } = require("child_process");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askPackageManager = () => {
  console.log("Select your package manager:");
  console.log("1. npm");
  console.log("2. pnpm");
  console.log("3. yarn");
  console.log("4. bun");

  rl.question("Enter your choice (1-4): ", (choice) => {
    const packageManagers = {
      1: "npm",
      2: "pnpm",
      3: "yarn",
      4: "bun",
    };

    const selectedPM = packageManagers[choice];

    if (!selectedPM) {
      console.error("Invalid choice. Please enter 1, 2, 3, or 4.");
      askPackageManager();
    } else {
      updatePackageManager(selectedPM);
    }
  });
};

const updatePackageManager = (packageManager) => {
  // Update angular.json
  if (fs.existsSync("angular.json")) {
    const angularConfig = JSON.parse(fs.readFileSync("angular.json", "utf8"));
    if (angularConfig.cli) {
      angularConfig.cli.packageManager = packageManager;
    } else {
      angularConfig.cli = { packageManager };
    }
    fs.writeFileSync("angular.json", JSON.stringify(angularConfig, null, 2), "utf8");
    console.log(`Updated angular.json packageManager to: ${packageManager}`);
  }

  // Update package.json prettier script
  if (fs.existsSync("package.json")) {
    const packageConfig = JSON.parse(fs.readFileSync("package.json", "utf8"));
    if (packageConfig.scripts && packageConfig.scripts.prettier) {
      const prettierCmd = packageManager === "npm" ? "npx" : packageManager === "yarn" ? "yarn dlx" : `${packageManager}x`;
      packageConfig.scripts.prettier = `${prettierCmd} prettier --write .`;
      fs.writeFileSync("package.json", JSON.stringify(packageConfig, null, 2), "utf8");
      console.log(`Updated package.json prettier script to use: ${prettierCmd}`);
    }
  }

  // Update Husky pre-commit hook
  if (fs.existsSync(".husky/pre-commit")) {
    const runCmd = packageManager === "npm" ? "npm run" : packageManager === "yarn" ? "yarn" : `${packageManager} run`;
    fs.writeFileSync(".husky/pre-commit", `${runCmd} quiet-lint\n`);
    console.log(`Updated .husky/pre-commit to use: ${runCmd}`);
  }

  // Remove existing lock files
  const lockFiles = ["package-lock.json", "pnpm-lock.yaml", "yarn.lock", "bun.lockb"];
  lockFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlinkSync(file);
      console.log(`Removed ${file}`);
    }
  });

  // Create pnpm workspace file if pnpm is selected
  if (packageManager === "pnpm" && !fs.existsSync("pnpm-workspace.yaml")) {
    fs.writeFileSync("pnpm-workspace.yaml", "packages:\n  - '.'");
    console.log("Created pnpm-workspace.yaml");
  }

  // Remove pnpm workspace file if switching away from pnpm
  if (packageManager !== "pnpm" && fs.existsSync("pnpm-workspace.yaml")) {
    fs.unlinkSync("pnpm-workspace.yaml");
    console.log("Removed pnpm-workspace.yaml");
  }

  console.log(`\nPackage manager updated to: ${packageManager}`);
  console.log(`\nRunning ${packageManager} install...`);

  const installProcess = spawn(packageManager, ["install"], {
    stdio: "inherit",
    shell: true,
  });

  installProcess.on("close", (code) => {
    if (code === 0) {
      console.log(`\n✅ Dependencies installed successfully!`);
      console.log(`\nNext step:`);
      console.log(
        `Run: ${packageManager === "npm" ? "npm run" : packageManager === "yarn" ? "yarn" : `${packageManager} run`} dev`
      );
    } else {
      console.error(`\n❌ Installation failed with exit code ${code}`);
      console.log(`\nTry running manually:`);
      console.log(`${packageManager} install`);
    }
    rl.close();
  });

  installProcess.on("error", (error) => {
    console.error(`\n❌ Failed to start installation: ${error.message}`);
    console.log(`\nTry running manually:`);
    console.log(`${packageManager} install`);
    rl.close();
  });
};

askPackageManager();
