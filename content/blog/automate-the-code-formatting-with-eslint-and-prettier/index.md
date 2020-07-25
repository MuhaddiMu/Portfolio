---
Title: Automate the Code Formatting with Eslint and Prettier
Description: Code formatting and code comments are something developers notice when they are not available. It's a best practice to format your code according to the style guidelines of your project or your organization to make it understandable for every new engineer on the team. use the Prettier and Eslint to auto formate your code to the next level
Featured_Image: Featured.png
---

Code formatting and code comments are something developers notice when they are not available. It's a best practice to format your code according to the style guidelines of your project or your organization to make it understandable for every new engineer on the team.

Every company has the code guidelines and it is the responsibility of every engineer to follow these best practices while coding and not following these guides can result in back and forth fixing the indentations which considered as poor programmer productivity. Automating the code review process can not only ease you but also the reviewer of and your team have to focus only on the solution, not the syntax.

Automating the code review is very simple and it's just a one-time solution for you and your team. To automate this workflow you have to use ESLint land and Prettier to implement it.

## Install VSCode Plugins

First of all, install the VS Code plugins [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) and make sure they're enabled.
ESLint will show colourful squigglies in IDE and Prettier will formate our code based on our configuration.

## Install Dependencies

`npm i -D eslint prettier prettier-eslint eslint-config-prettier eslint-plugin-prettier`

## Setup the Config files

Create a `.eslintrc` file in your project root.
In here we basically tell ESLint to:

- Extend from the recommended prettier config
- Register the Prettier plugin we installed
- Show Prettier errors as errors

```json[.eslintrc]
{
  "extends": ["plugin:prettier/recommended"],
  "plugins": ["prettier"],
  "rules": {
    "prettier/prettier": "error"
  }
}
```

Note: Your ESLint config can include many more rules. I'm keeping it simple and easy to grasp.  
Next, create a `.prettierrc` file in your project root.
You can tweak these settings, or [add new ones](https://prettier.io/docs/en/options.html) as you like:

```json[.prettierrc]
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false
}
```

## Prettier pre-commit Hook

Run `npx mrm lint-staged` This command will configure git hook which will automatically format code on every `git add` command if you forgot to fix in IDE.

## Format on Save

Inside the VSCode settings, look for `formatOnSave` and check the checkbox next to it or add this line to settings.json
`"editor.formatOnSave": true`

That's it, now on every misconfiguration of code you will see the squiggly line on IDE and if you forgot to pick it, it will automatically be fixed on saving the file. Otherwise, it will surely get fixed on git stage.
