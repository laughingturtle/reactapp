const apiUrl = "/api/";

export const toggleAddBook = () => {
  return {
    type: 'TOGGLE_ADD_TODO'
  }
}

export const addNewTodo = (todo) => {

}

export const deleteTodo = (todo) => {

}

export const editTodo = (todo) => {

}

export const fetchTodos = () => {
  return (dispatch) => {

    dispatch(fetchTodosRequest());

    return fetch(apiUrl)
    .then(response => {
      if(response.ok){
        response.json().then(data =>{
          dispatch(fetchTodosSuccess(data.todos, data.message));
        })
      } else {
        response.json().then(error => {
          dispatch(fetchTodosFailed(error));
        })
      }
    })
  }
}

export const fetchTodosRequest = () => {
  return {
    type:'FETCH_TODOS_REQUEST'
  }
}

export const fetchTodosSuccess = (todos, message) => {
  return {
    type:'FETCH_TODOS_SUCCESS',
    todos: todos,
    message: message,
    recievedAt: Date.now
  }
}

export const fetchTodosFailed = (error) => {
  return {
    type: 'FETCH_TODOS_FAILED',
    error
  }
}

export const fetchTodoById = (todoId) => {
  return (dispatch) => {
    return fetch(apiUrl + todoId)
    .then(response => {
      console.log(response);
      if(response.ok){
        response.json().then(data => {
          dispatch(fetchTodoSuccess(data.todo[0],data.message));
        })
      } else {
        response.json().then(error => {
          dispatch(fetchTodoFailed(error));
        })
      }
    })
  }
}

export const fetchTodoRequest = () => {
  return {
    type:'FETCH_TODO_REQUEST'
  }
}

export const fetchTodoSuccess = (todo,message) => {
  return {
    type: 'FETCH_TODO_SUCCESS',
    todo: todo,
    message: message,
    recievedAt: Date.now
  }
}

export const fetchTodoFailed = (error) => {
  return {
    type:'FETCH_TODO_FAILED',
    error
  }
}