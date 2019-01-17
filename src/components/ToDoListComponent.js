/*ToDoListComponent.js*/

import React from 'react';
import ToDoTileComponent from './ToDoTileComponent';
import './todoapp.css';

const ToDoListComponent = (props) => {
    console.log("your calling me unnecessarily")
    return(
        <div style={props.style} className="todolist">
            {props.todoList.map( item => 
            <div key={item.id}>
                    <ToDoTileComponent item={item} handleDelete={props.handleDelete} handleEdit={props.handleEdit} />
            </div>)}
        </div>
    )
    
//                    <button type="button" onClick={() => props.handleDelete(item)}>Done</button>
//                    <button type="button" onClick={() => props.handleEdit(item)}>Edit</button>
} 

export default ToDoListComponent;