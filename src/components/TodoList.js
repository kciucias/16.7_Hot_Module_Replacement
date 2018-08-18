import React from 'react';
import TodoItem from './Todo';


const TodoList = props => {
	return (
		<ul>
			{props.list.map(item => <li key={item.id} onClick={() => props.remove(item.id)}>{item.text}</li>)}
		</ul>	
	);
};


export default TodoList;