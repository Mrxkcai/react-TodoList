import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Todolist extends Component{ 
    constructor(props) {
        super(props)
        this.itemClick = this.itemClick.bind(this)
    }

    itemClick() {
        this.props.delete(this.props.index)
    }

    render (){
        // 父组件render执行的时候 子组件render函数也会执行
        // es6 解构赋值
        const { content } = this.props
        return (
            <li onClick={this.itemClick}
                // 阻止html转义
            //    dangerouslySetInnerHTML={{ __html: content}}
            >
            {this.props.test} {this.props.content}
            </li>
        )
    }

}



Todolist.propTypes = {
    content:PropTypes.string.isRequired,
    index:PropTypes.number
}

Todolist.defaultProps = {
    test:''
}


export default Todolist