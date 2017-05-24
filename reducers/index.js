const todos = (state=[],action)=>{
	switch (action.type)
	{
		case 'ADD_TODO_LIST':{
			return [...state,{
				title:action.title,
				todos:[],
				completed:false,
				added:new Date(),
				id:action.id
			}]
		}
		break;
		case 'REMOVE_TODO_LIST':
			return state.filter(s=>s.id!=action.id);
		break;			
		case 'ADD_TODO':
			return state.map(list=>{
					return Object.assign({},
					list,
					list.id===action.idList?{
						todos:[...list.todos,{
							id:action.id,
							title:action.title,
							completed:false,
							added:new Date()
						}]
					}:{todos:[...list.todos]}
			)});
		break;
		case 'REMOVE_TODO':
			return state.filter(s=>s.idList!=action.idList&&s.idTodo!=action.idTodo);
		break;
		case 'TOGGLE_TODO':
			return state.map(t=>{
				if (t.id==action.id&&t.idList==action.idList)
					t.completed=true;
				return t;
			});
		break;		
		default:
			return state;
	}
}

module.exports=todos;