import { ArticleService } from "./article.service";
import { TagService } from "./tag.service";
// const files = require.context('./', true, /.service.ts$/);
// console.log(files('./articles.service.ts'))

// files.keys().forEach(key => {
//     // console.log(key)
//     // console.log(files(key))
//     export files(key)
// });
// it will auto require all vuex module from modules file
// const modules = files.keys().reduce((modules, modulePath) => {
//     // set './app.js' => 'app'
//     let moduleName='';
//     let moduleNameArr = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1').split('.');
//     moduleNameArr.forEach(v => {
//         moduleName += v.substring(0, 1).toUpperCase() + v.substring(1)
//     })
//     const value = files(modulePath)
//     modules[moduleName] = value[moduleName]
//     return modules
// }, {})
// console.log(modules);
// console.log(ArticlesService);
// export default modules

export {
    ArticleService,
    TagService
}
