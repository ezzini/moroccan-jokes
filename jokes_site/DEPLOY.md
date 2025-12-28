# How to Deploy to GitHub Pages

Since I have already initialized the local Git repository for you, follow these steps to put your website online:

## Step 1: Create a Repository on GitHub
1. Go to [GitHub.com](https://github.com) and log in.
2. Click the **+** icon in the top right and select **New repository**.
3. Name it (e.g., `moroccan-jokes`).
4. Make sure it is **Public** (required for free GitHub Pages).
5. **Do not** check "Initialize with README", .gitignore, or license (we already have files).
6. Click **Create repository**.

## Step 2: Push Your Code
Copy the commands shown in the section **"…or push an existing repository from the command line"**. They will look like this (replace `YOUR-USERNAME` with your actual username):

```bash
git remote add origin https://github.com/YOUR-USERNAME/moroccan-jokes.git
git branch -M main
git push -u origin main
```

Run these commands in your terminal inside the `jokes_site` folder.

## Step 3: Enable GitHub Pages
1. Go to your repository **Settings** tab.
2. Scroll down to the **Pages** section (or clicking "Pages" on the left sidebar).
3. Under **Source**, select **Deploy from a branch**.
4. Under **Branch**, select `main` and `/ (root)`.
5. Click **Save**.

## Step 4: Done!
Wait a minute or two. GitHub will verify and deploy your site.
You will see a link like: `https://YOUR-USERNAME.github.io/moroccan-jokes/`
