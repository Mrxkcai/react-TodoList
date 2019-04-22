const defaultState = {
    list:['1', '2'],
    inputValue:'xiaoheihei'
};

// reducer 可以接受state，不可改变
export default (state = defaultState, action) => {
    if(action.type === 'input_change'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }

    if(action.type === 'add_todolist'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        return newState
    }

    if(action.type === 'delete_todolist'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    if(action.type === 'init_todolist'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list = (action.list)
        return newState
    }
    return state
}