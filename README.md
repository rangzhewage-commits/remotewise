# RemoteWise: free launch guide (Cloudflare Pages)

This is a static website. Nothing to pay for and no packages to install.

## Where things are
- `src/config.js`: your website address, articles, tools, affiliate links. Edit this file.
- `build.js`: builds the website into the `dist` folder.
- `src/assets/`: CSS, JavaScript, icon.
- `dist/`: the finished website (created by the build; Cloudflare makes it for you).

## Cloudflare Pages settings (copy exactly)
- Framework preset: **None**
- Build command: `node build.js`
- Build output directory: `dist`
- Project name: `remotewise` (if taken, choose another, see Step 7)
- Node version: set by the `.node-version` file (20). No variables needed.

## Step-by-step

### 1. Create a free Cloudflare account
Go to cloudflare.com, choose **Sign up**, enter your email and a password, and confirm the email Cloudflare sends you. No card is needed for the free plan.

### 2. Create a free GitHub account
Go to github.com, choose **Sign up**, and confirm your email.

### 3. Upload the project to GitHub
1. Unzip `remotewise-site.zip` on your computer.
2. In GitHub, click **+** (top right) > **New repository**. Name it `remotewise`, keep it Public or Private, and click **Create repository**.
3. On the new repository page click **uploading an existing file**.
4. Open the unzipped folder and drag **everything inside it** (the files `build.js`, `package.json`, `README.md`, `.node-version`, `.gitignore` and the `src` folder) into the browser. Make sure `build.js` and `src` are at the top level, not inside another folder.
5. Click **Commit changes**.
Note: files starting with a dot may be hidden on your computer. If you cannot see `.node-version`, skip it; it is optional.

### 4. Connect GitHub to Cloudflare Pages
1. In Cloudflare, open **Workers & Pages** in the left menu.
2. Click **Create**, choose the **Pages** option, then **Connect to Git**. (Cloudflare changes its menus sometimes; look for "Pages" and "Connect to Git".)
3. Choose **GitHub**, allow access, select your `remotewise` repository and click **Begin setup**.

### 5. Set the build settings
Enter the settings from the "Cloudflare Pages settings" section above: Framework preset None, Build command `node build.js`, Build output directory `dist`.

### 6. Deploy
Click **Save and Deploy**. Wait one to three minutes. If the build fails, open the log; the most common cause is files uploaded inside an extra folder (see Step 3).

### 7. Find your free pages.dev address
When deployment finishes, Cloudflare shows your address, for example `https://remotewise.pages.dev`. If the name `remotewise` was already taken, Cloudflare adds extra letters or numbers, so use exactly what it shows you.
**Then tell the website its address:**
1. In GitHub, open `src/config.js` and click the pencil icon (Edit).
2. Find the line `SITE.domain='https://remotewise.pages.dev';` and replace the address with yours exactly (start with `https://`, no slash at the end).
3. Click **Commit changes**. Cloudflare rebuilds automatically.
This sets your canonical links, social-sharing links, sitemap and robots.txt. If your address is exactly `https://remotewise.pages.dev` you do not need to change anything.

### 8. Test on desktop and mobile
- Desktop: open your address; click every menu item, open all 10 articles, try search and the category buttons.
- Phone: open the address on your phone, tap **Menu**, scroll an article, scroll the comparison table sideways, and check nothing is cut off.
- Without a phone: in Chrome press F12, then the phone/tablet icon at the top of the panel.
- Also open `/sitemap.xml` and `/robots.txt` after your address and check they show your address.

### 9. Update the website later
Edit a file on GitHub (pencil icon), click **Commit changes**, and Cloudflare publishes the new version automatically in a couple of minutes.
- Add an article: add a new block to the `ARTS` list in `src/config.js`, copying an existing one.
- Add an affiliate link: in `AFF`, replace `[INSERT APPROVED AFFILIATE LINK]` with the approved link. Use only links from programs that have accepted you.

### 10. Add a purchased custom domain later
1. In Cloudflare: **Workers & Pages** > your project > **Custom domains** > **Set up a custom domain**, and follow the steps.
2. Change `SITE.domain` in `src/config.js` to the new address and commit.
3. In Google Search Console, add the new address and submit its sitemap again.
(Costs: the domain is paid to a registrar; Cloudflare Pages itself stays free. Check current terms on Cloudflare.)

## Submit to Google Search Console (free)
1. Go to search.google.com/search-console and sign in.
2. Add property > **URL prefix**, and enter your address.
3. Choose the **HTML tag** method. Copy only the code inside `content="..."`, paste it into `SITE.googleVerification` in `src/config.js`, commit, wait for deployment, then click **Verify**.
4. In **Sitemaps**, enter `sitemap.xml` and submit.

## Contact form and newsletter
Both are switched off until you connect a free provider and put its URL in `formUrl` or `newsletterUrl` in `src/config.js`.

## Run it on your computer (optional)
`node build.js` then `cd dist` and `python3 -m http.server 8000`, open http://localhost:8000. Canonical links will still show your live address; that is normal.
