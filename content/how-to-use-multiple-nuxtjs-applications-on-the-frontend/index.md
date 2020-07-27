---
Title: How to use multiple Nuxt.Js Applications on the Frontend?
Description: Frontend development is taking over the internet. Frameworks like Nuxt &amp; Vue come in handy to solve these common pitfalls of SPA,SSR, SEO Multiple Frontends
Featured_Image: Featured.png
---

Frontend development is taking over the internet. When it comes to modern frontend SPA, some very common problems arise. These modern problems need modern solutions. The problems include server-side rendering, search engine ranking, tracking analytics and so on. Frameworks like Nuxt.js, Next.js and Nest.js come in handy to solve these common pitfalls. As far server-side rendering is concerned we often need it in the public pages for search engine ranking. Now consider a scenario in which we need both public pages and authenticated dashboard. According to our server-side rendering configuration, we don't want to render authenticated pages on the server, which is considered as a bad practice. Below we'll see how to create multiple frontend instances for both public and private pages in Nuxt.js.

Still having doubts? Consider another scenario in which we need a public view to display the content and CMS to manage the content. They both are using the same API and mixing the functionalities in one Nuxt project can create alot of fuss. An alternative for that is to separately create two Nuxt projects but again this won't be the good practice either. So we will create one Nuxt projects with multiple frontends.

- Initialise Nuxt using the command `npx create-nuxt-app primary` Make sure you have npx installed (npx is shipped by default since NPM 5.2.0). Primary is indicating our main frontend for the public view. Also, initialise Nuxt for the authenticated views using the command npx create-nuxt-app authenticated.
- Create a new folder inside primary and move all the files of the primary folder in that folder except node_modules, package.json, package-lock.json, .babelrc, .editorconfig, .eslintrc.js, .gitignore and .prettierrc.
- Move the authenticated folder to the primary folder.
- Add the following code in `main/primary/nuxt.config.js`

```js[primary/nuxt.config.js]
srcDir: __dirname,
buildDir: '.nuxt/primary'
```

- Add the following code in `main/authenticated/nuxt.config.js`

```js[authenticated/nuxt.config.js]
srcDir: __dirname,
buildDir: '.nuxt/authenticated'
```

`srcDirdefine` the source directory of Nuxt.js application.  
`buildDirwill` define the dist directory for our Nuxt.js application.

- Now install concurrently npm package in the main folder to run scripts parallel `npm i concurrently --save-dev`
- Change `package.json` in the main folder.

```json[package.json]
"scripts": {
    "primary:dev": "nuxt --config-file primary/nuxt.config.js -p=3000",
    "authenticated:dev": "nuxt --config-file authenticated/nuxt.config.js -p=4000",
    "dev": "concurrently \"npm run primary:dev\" \"npm run authenticated:dev\"",
    "primary:build": "nuxt build --config-file primary/nuxt.config.js",
    "authenticated:build": "nuxt build --config-file authenticated/nuxt.config.js",
    "primary:start": "nuxt start --config-file primary/nuxt.config.js",
    "authenticated:start": "nuxt start --config-file authenticated/nuxt.config.js",
    "primary:generate": "nuxt generate --config-file primary/nuxt.config.js",
    "authenticated:generate": "nuxt generate --config-file authenticated/nuxt.config.js",
  },
```

By changing the script settings we are now able to run both of the instances with single npm command `npm run dev`

<v-img src="/how-to-use-multiple-nuxtjs-applications-on-the-frontend/images/Scripts.png" alt="Scripts"></v-img>

In the authenticated folder, we still have some files and folders that we don't need. Feel free to delete them. Before merging and removing the code make sure both package.json uses the same dependencies.
