/*ToDoTileComponent.js*/

import React from 'react';
import './Tile.css';
const ToDoTileComponent = (props) => {
    return(
        <div className="todotile">
            <h6 className="tileText">{props.item.text}</h6>
            <hr/>
            <div>
                <i>6 mins ago</i>
                <span className="todooperation">
                    <input type="button" className="editbutton" onClick={() => props.handleEdit(props.item)}/>
                    <input type="button" className="deletebutton" onClick={() => props.handleDelete(props.item)}/>
                </span>
            </div>
        </div>
    )
}

export default ToDoTileComponent;