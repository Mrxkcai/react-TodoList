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
    test:'22'
}


export default Todolist