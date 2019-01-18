/*ToDoAddComponent.js*/

import React from 'react';
import './todoapp.css';

const ToDoAddComponent = (props) => {
    let textValue= props.defaultValue;
    return(
        <div style={props.style} className="addcomponent">
            <input type="text" className="todoinput" placeholder={"Your TODO goes here.."} defaultValue={textValue} onKeyUp={e => {
                        if (e.key === 'Enter') {
                          props.handleAddTodo(textValue)
                        }
                        textValue = e.target.value
                        //this.setState({addTodoText:e.target.value})
                        
                    }}/>
            <button type="button" className="todoaddbtn" onClick={() => props.handleAddTodo(textValue)}>Add</button>
        </div>
    )
}

export default ToDoAddComponent;
