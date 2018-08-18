import React from 'react';

const TodoItem = props => <li id={props.id} onclick= {() => props.remove(props.id)}>{props.name}</li>

export default TodoItem;