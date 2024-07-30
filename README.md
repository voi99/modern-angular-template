# Modern Angular Template

This repository serves as a template for creating a new modern Angular project. Follow the instructions below to set up your project.

   - Zoneless
   - Material 3 (components color variants and sizes) and Tailwind integrations
   - Bun package manager
   - Eslint (flat config) & Prettier


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

4. **Follow the prompts:**

    The setup script will prompt you to enter your project name. This will replace the placeholders in the package.json and angular.json files with your project name.

4. **Install dependencies:**

    ```sh
    bun install
    ```

5. **Start the development server:**


    ```sh
    ng serve
    ```

