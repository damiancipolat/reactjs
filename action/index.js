let id    = 0;
let idtodo= 0;

//ES5
module.exports={
	addTodoList:title=>({
		type:'ADD_TODO_LIST',	//Los actions siempre en mayuscula separado por guiones bajos.
		title,
		completed:false,
		id:id++,
		added:new Date()
	}),
	removeTodoList:id=>({
		type:'REMOVE_TODO_LIST',
		id
	}),
	addTodo:(title,idlista)=>({
		type:'ADD_TODO',
		idTodo:idtodo++,
		idList:idlista,
		title,
		completed:false,
		added:new Date()
	}),
	toggleTodo:(id,idtodoList)=>({
		type:'TOGGLE_TODO',
		id,
		idtodoList
	})
};