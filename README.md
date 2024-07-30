# Modern Angular Template

This repository serves as a template for creating a new modern Angular project. Follow the instructions below to set up your project.

- Zoneless
- Material 3 (custom theme, components color variants and sizes)
- Tailwind
- Material & Tailwind integration
- Bun package manager
- Eslint (new flat config) & Prettier
- Schematics (OnPush change detection, inlineStyle and inlineTemplate)
- stylePreprocessorOptions (includePaths: ["src/scss"])

## Setup Instructions

1. **Create a new repository using this template:**

   - Click the "Use this template" button.
   - Follow the prompts to create a new repository based on this template.

   ![Screenshot 2024-07-30 at 23 58 49](https://github.com/user-attachments/assets/17bff38b-6c27-47f1-8294-69617c01c836)

2. **Clone the newly created repository:**

   Open your terminal and run the following command, replacing `your-username` and `your-new-repo` with your GitHub username and the name of your newly created repository:

   ```sh
   git clone https://github.com/your-username/your-new-repo.git
   cd your-new-repo
   ```

3. **Run the setup script:**

   Make sure you have Node.js installed on your system. Run the setup script to customize your project:

   ```sh
   node setup.js
   ```

   You will be prompted to enter your project name. Ensure that you provide a non-empty name:

   ```sh
   Enter your project name: my-angular-app
   ```

4. **Install dependencies:**

   ```sh
   bun install
   ```

5. **Start the development server:**

   ```sh
   ng serve
   ```

## Contributing

If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
