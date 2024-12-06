

### Pokeymon Project

Pokeymon is a web-based application/game built with Vite, a fast and efficient build tool.

### Pokeymon Project
- Pokeymon is a web-based application/game built with Vite, a fast and efficient build tool.
- Interactive UI with real-time updates.

### Installation
To get started with the Pokeymon project, follow the steps below to install and run it locally.

### Prerequisites
Before you begin, ensure that you have the following installed:

`Node.js (version 16.0 or above).`

### Steps to Install

1. Install Vite pakage:

    ```
   pnpm create vite@latest .
    ```

2.Install the necessary dependencies using npm:

    ```
    pnpm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

    This will start the Vite development server. You can open your browser and go to `http://localhost:3000` to see the project in action.

## Building for Production

To build the project for production, use the following command:

```bash
npm run build
```
 ### Usage
After running the development server, you can interact with the Pokeymon app by


Select a Dog: On the main page, you will see a list of dogs or an interface where you can select a dog.

View Breed Information: Once you select a dog, the application will display detailed information about its breed, including characteristics, history, and other relevant data.

### Shuffle Feature

The project uses a shuffle functionality to randomize the dog list or the breed information. This feature allows you to:

***shuffle install*** - `npm install fast-shuffle` (for close matching search)

***fuse install*** - `npm install fuse.js`


Randomly shuffle the dogs to display different breeds each time you visit the page.
Shuffle between dog breeds when you click the shuffle button, providing a new random breed to explore.
Interact with the App: You can select a dog to view its breed, shuffle to get random breeds, and explore various features related to dog breeds.

For example, when you click the Shuffle button, it will randomly pick a dog, and you will see the breed's information displayed on the screen.

### Deployment

Once you have the production build, you can deploy it to your preferred platform. For example:

-Vercel: You can deploy directly from GitHub.
-Netlify: Similarly, you can connect your GitHub repository to deploy your app.
-Custom server: Deploy the dist/ folder to your own web server.

### License
This project is licensed under the MIT License.
