import React, { Component, Fragment } from 'react';
import './App.css';

import Todolist from './components/Todolist.js'


//定义一个React组件 一个React组件必须包含一个 render函数 React强调面向数据编程
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      list:[ ],
      value:'请输入待办事项',
      iscolor:false
    }

    // 统一绑定this
    this.handlechange = this.handlechange.bind(this)
    this.handleclick = this.handleclick.bind(this)
    this.handleitem = this.handleitem.bind(this)
  }

  // 点击添加
  handleclick() {
    if(this.state.value === '请输入待办事项'){
      return
    }
    // this.setState({
    //   // [...  ]展开运算符,表示包含原先含有的值
    //   list:[...this.state.list, this.state.value],
    //   value:'请输入待办事项',
    //   iscolor:false
    // })

    this.setState((prevState) => ({
      list:[...prevState.list, prevState.value],
      value:'请输入待办事项',
      iscolor:false
    }))

    
  }

  //input值改变时
  handlechange(e) {
    this.setState({
      value: e.target.value
    })
    if(e.target.value === '请输入待办事项'){
      this.setState({
        iscolor: false
      })
    }else{
      this.setState({
        iscolor: true
      })
    }
  }

  //删除item
  handleitem(index) {
    // immutable 表示不允许修改state中的数据 
    // 尽量去改变数据的副本，不要直接改变源数据 避免做数据优化时造成困难
    // const list = [...this.state.list]
    // list.splice(index, 1)
    // this.setState({
    //   //当键值名称一致时，可以简写
    //   list
    // });

    //es6最新写法 接收的prevState参数表示之前得值
    this.setState((prevState) => {
      const list = [...prevState.list]
      list.splice(index, 1)
      //返回的是一个对象{list: list} 直接返回list是一个变量，不会生效
      return {list}
    })
  }


  // 代码块提取成方法调用
  getItemHandle() {
    return (
      this.state.list.map((item, index) => {
        return (
          <Todolist 
            delete={this.handleitem} 
            key={index} 
            content={ item } 
            index = {index}
             />
        )
      })
    )
  }

  render() {
    // jsx语法
    return (
      // 最外层不想包裹div是可以使用 Fragment 来代替的
      // <div className="App"> 
      <Fragment>
        <div className='text-color'>
          <label htmlFor='insertArea'>输入内容</label>
          <input id='insertArea' className={ this.state.iscolor?'': 'iscolor' } onChange = { this.handlechange } value={ this.state.value } />
          <button onClick={this.handleclick}>add</button>
        </div>
        <ul>
          {
           this.getItemHandle()
          }
        </ul>
        </Fragment>
      // </div>
    );
  }
}

// 导入, 导出配合使用
export default App;
