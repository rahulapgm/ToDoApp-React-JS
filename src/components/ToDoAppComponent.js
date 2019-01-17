/*ToDoAppComponent.js*/

import React, { Component } from 'react';
import ToDoListComponent from './ToDoListComponent';
import ToDoAddComponent from './ToDoAddComponent';
import './todoapp.css';
import ToDoEditComponent from './ToDoEditComponent';

class ToDoAppComponent extends Component{
    state = {
        addTodoText:"",
        todoList:[],
        edititem:{
            id:null,
            text:''
        },
        editCalled:false,
        editUpdateText:''
    }
    
//    shouldComponentUpdate(nextProps,nextState){
//        //console.log("nextprops",nextProps,"nextstate", nextState.todoList)
//        if(nextProps.todoList === nextState.todoList){
//            return false;
//        }
//        else{
//            //nextProps = nextState.todoList;
//            return true;
//        }
//    }
    
    handleAddTodo = (textValue) => {
        console.log("value:",textValue)
        let {todoList} = this.state;
        todoList.push({id:Math.random(), text:textValue});
        this.setState({todoList,addTodoText:textValue});
    }
    
    handleDelete = (item) => {
        //console.log(item.id);
        let {todoList} = this.state;
        todoList = todoList.filter((i)=> i.id !== item.id);
        this.setState({todoList});
    }
    
    handleEditUpdate = (itemId, editedText) => {
        //console.log("working")
        let {todoList} = this.state;
        let indexOfItem = todoList.findIndex(x => x.id === itemId);
        if(todoList[indexOfItem]!==undefined){
            todoList[indexOfItem].text = editedText;
            //console.log("Update", todoList,indexOfItem);
            this.setState({...todoList});
            this.setState({editCalled:false})
        }
        else{
            this.setState({editCalled:false})
        }
        
    }
    handleEdit = (edititem) => {
        console.log(edititem);
        if(this.state.editCalled){
            this.setState({editCalled:false});
        }
        this.setState({edititem,editCalled:true});
    }
 //
    render(){
        let blurEffect= this.state.editCalled ? {filter: "blur(4px)", pointerEvents:"none"} : {}
        return(
        <div className="todoappmain" onClick={(e) => 
                e.target.className==="todoappmain" ? (this.state.editCalled ? this.setState({editCalled:false}): true ) : true
            }>
            <ToDoAddComponent style={blurEffect} handleAddTodo={this.handleAddTodo} defaultValue={this.state.addTodoText}/>
            {/*render list*/} 
            <ToDoListComponent style={blurEffect} todoList={this.state.todoList} handleDelete={this.handleDelete} handleEdit={this.handleEdit}/>
                
            {/*Dynamic Edit box*/}
            {this.state.editCalled ? 
                <ToDoEditComponent item={this.state.edititem} handleEditUpdate={this.handleEditUpdate} /> 
            : <div></div>}
        </div>
        )
    }
}

export default ToDoAppComponent;