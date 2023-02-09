
// What is `NPM`?
// npm used to manage all the package that required by the project. It not stand for 
// node package manager.

// What is `Parcel/Webpack`? Why do we need it?
// Parcel/webpack is a bundler, react dependent on bunlder for use more powerful function.
// Use of Bundler are like HRM(hot module replacement),bundling,minifier,Caching,image 
// optimization,File watcher algorithm,compersion,port number handle,cleaning our code,
// dev and production build & compatable with older version etc.

// What is `.parcel-cache`
// parcel cache used for processing or operation performed like File watcher algorthim,
// minified,hrm etc.
// Parcel perform operation or process it required space to perform, 
// parcel used parcel-cache.

// What is `npx` ?
// npx used to execute the package like npx parcel index.html etc.

// What is difference between `dependencies` vs `devDependencies`
// devDependencies is when we install package for local development and testing like parcel,webpack etc.
// dependencies is when we install package used by your application in production.

// What is Tree Shaking?
// removal of dead code,example- when use package where lot of code and we use some 
// code then left of code is dead remove this code. 

// What is Hot Module Replacement?
// HMR used when you update the code it directly update module in the browser, it automatically reflect in your browser
// HMR improved the development experience by updating modules in the browser at runtime
//  without needing a whole page refresh.

// List down your favourite 5 superpowers of Parcel and describe any 3 of them in your
// own words.
// HMR,Caching,Image optimization,Tree shaking,dev and production build,minify and 
// file watcher algorithm etc.
// HRM used to updating modules in the browser at runtime.
// Caching, it means all operation or process like HRM,minify,compression etc to build 
// your application so fast than the first time build application it is known as caching.
// dev and production build is so easy to build in parcel using this command 
// npx parcel index.html(starting appliaction file) for dev build
// npx parcel build index.html(starting appliaction file) for production build

// What is `.gitignore`? What should we add and not add into it?
// .gitignore file used to inform which files should not upload in the github for production level
// Any file which generate on the server it should push in gitignore file.ex- node_modules,dist,parcel-cache ect.

// What is the difference between `package.json` and `package-lock.json
// package.json tells about version of package and 
// package-lock.json use to locked the version of package 

// Why should I not modify `package-lock.json`?
// It locked the version of all the package for that it generated to have same results in any environment.

// What is `node_modules` ? Is it a good idea to push that on git?
// node_modules is where all the package for persent. It is bad idea to push that on git due to very heavy.

// What is the `dist` folder?
// dist folder is create when production build and it contains three main file html,css and js.

// What is `browserlists`
// browserLists is used to run appliaction on older version.


