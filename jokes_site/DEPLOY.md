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

## Troubleshooting (404 Error)
If you see a **404 File Not Found** error:

1.  **Check Repository Visibility** (CRITICAL):
    - **Your repository must be Public** for GitHub Pages to work on the free plan.
    - If it is **Private**, the 404 is expected unless you upgrade to GitHub Pro.
    - Check the badge next to your repo name at the top left. If it says "Private", go to **Settings > General > Danger Zone > Change visibility** -> Make Public.

2.  **Wait a few minutes**: It can take up to 10 minutes for the first deployment.
2.  **Check "Actions" Tab**:
    - Go to your repository on GitHub.
    - Click the **Actions** tab at the top.
    - Click the latest workflow run (usually "pages build and deployment").
    - If it's red (Failed), click it to see why.
3.  **Check Settings**:
    - Go to **Settings > Pages**.
    - Ensure **Source** is "Deploy from a branch" and **Branch** is "main" / "/ (root)".
4.  **Bypass Jekyll**:
    - GitHub tries to use Jekyll by default. Create an empty file named `.nojekyll` in your folder and push it.
    - Run this in terminal:
      ```bash
      New-Item -ItemType file .nojekyll
      git add .nojekyll
      git commit -m "Add nojekyll"
      git push
      ```
5.  **Check File Location**:
    - Ensure `index.html` is at the very top of your repository code, not inside a subfolder.

