
import axios from 'axios'

export const getTodolist = () => {
    return (dispatch) => {
        axios.get('/api/todolist')
        .then((res) => {
            
        })
        .catch((err) => {   
            const action = {
                type:'init_todolist',
                list:['1','2','3','4']
              }
            dispatch(action)
        })
    }
}