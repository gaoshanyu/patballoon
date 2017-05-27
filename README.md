# patballoon

> A Vue.js project. This is a very simple project for Vue2&Webpack2&Koa2, you also can use it as your Node.js/Vue.js project structure.
It's create base on [vue-cli](https://github.com/vuejs/vue-cli) with webpack template.

*Notes:
1. The webpack only builds modules for client site, because I don't think the server site needs;
2. Not support hot-reload, waiting for roll in.

## Environment
```
"node": ">= 4.0.0",
"npm": ">= 3.0.0"
```
> If you use WebStorm for your project, please also:

> WebStorm: 2017.1.3 + (it's already support full Vue.js, you can download from [here](https://www.jetbrains.com/webstorm/))

> ES6: Prefrences.../Languages & Frameworks/JavaScript, set ECMAScript 6 as the JavaScript version

> Enable Nodejs Core(not required): Prefrences.../Languages & Frameworks/Node.js and NPM, enable the Nodejs Core Library


## Usage

``` bash
# install dependencies
npm install

# build & run for development
npm run dev

# build & run for production with minification
npm run prod

# build for production with minification(this is suggest for release project)
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

>For WebStorm:
1. Right click the **package.json** file;
2. Choose the  **Show NPM Scripts** option;
3. All the npm scripts option should be the left-bottom corner of the WebStorm window.
