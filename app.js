const createStore = require('redux').createStore;
const actions     = require('./action');
const reducers    = require('./reducers');

const store 	  = createStore(reducers);
store.subscribe(()=>console.log(store.getState()));


store.dispatch(actions.addTodoList('hola'));
store.dispatch(actions.addTodo('sub tarea 1',0));
//store.dispatch(actions.removeTodoList(0));
//store.dispatch(actions.toggleTodo(0,0));


