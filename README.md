This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify



### 1 <label> 中for需替换成 htmlFor

### 2 class 写成 className

### 3 dangerouselySetInnerHTML={{ __html: ''}} 阻止标签转义

### 4 事件绑定 如onClick 驼峰 并.bind(this)

### 5 做注释{/* */}

### 6 修改this.state中得值时，先拷贝再修改副本 完了重新赋值

### 7 父组件通过属性方式给子组件传值 子组件使用this.props.属性接受

### 8 父组件传递得值 子组件接受时学习使用es6 解构赋值写法

### 9 map循环体需要添加key值 key添加在循环体最外层代码块上

### 10 es6新写法 this.setState((prevState) => ({}), () => { 这是一个异步的函数，最后接收一个回调函数 } ) prevState参数指代前一个state

### 11 在class申明的组件外面使用PropTypes. = {} 和 defaultProps. = {} dangerousInnerHTMl使用时注意默认值不生效

### 12 react之所以提升性能，是因为生成了虚拟DOM，它是js对象，方便对比。对比真实DOM会调用application api 十分消耗性能

### 13 diff => diffrence  同层比对

### 14 ref用法是需要获取DOM元素时使用的，ref = { () => {this.'' = ''}},但在react中尽量避免操作DOM

### 15 组件生命周期函数 
###    componentWillMount()
###    render()  
###    componentDidMount() 
###    componentWillReceiveProps()  子组件 组件第一次出现时不触发，第二次接收props时触发
###    shouldComponentUpdate() 
###    componentWillUpdate() 
###    componentDidUpdate() 
###    componentWillUnmount()       组建剔除时触发

### 16 react 请求接口先安装axios yarn add axios