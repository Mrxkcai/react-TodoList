import React, { Component } from 'react'

class Todolist extends Component{ 
    constructor(props) {
        super(props)
        this.itemClick = this.itemClick.bind(this)
    }

    itemClick() {
        this.props.delete(this.props.index)
    }

    render (){
        // es6 解构赋值
        const { content } = this.props
        return (
            <li onClick={this.itemClick}
                // 阻止html转义
                dangerouslySetInnerHTML={{ __html: content}}
            >
            </li>
        )
    }
}

export default Todolist