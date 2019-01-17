/*ToDoEditComponent.js*/

import React from 'react';
import "./todoapp.css";

const ToDoEditComponent = (props) => {
    let updateText=props.item.text
    return(
        <div id="editpopup" className="editbox">
            <input id="itemtext" className="updatetxt" type="text" defaultValue={props.item.text} onChange={(e)=> updateText=e.target.value} />
            <button type="button" className="updatebtn" onClick={()=>props.handleEditUpdate(props.item.id,updateText)}>Update</button>
        </div>
    )
}

export default ToDoEditComponent;