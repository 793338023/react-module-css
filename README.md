## css模块化

基于CRA，安装`node-sass`，而设置css模块化主要是css-loader的options的module设置为true

## typescript智能提示

使用`typescript-plugin-css-modules`配合vscode，不要新增`.d.ts`文件就可以达到css模块智能提示

当然也可以使用`typed-css-modules`，那样最好的方式不要集成到webpack里,减少webpack的压力，直接启动监听即可，只是有个缺点就是无法即使或`.d.ts` 不能没有都很少的生成所有定义

## 资料
https://juejin.cn/post/6878519063270817805

https://github.com/mrmckeb/typescript-plugin-css-modules#options

https://www.npmjs.com/package/typed-css-modules

https://www.html.cn/create-react-app/docs/adding-a-sass-stylesheet/

https://github.com/pmmmwh/react-refresh-webpack-plugin/issues?page=4&q=is%3Aissue+is%3Aclosed