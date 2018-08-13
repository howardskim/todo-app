import React, {Component} from 'react';
// import listData from '../data/todo';
import TodoItem from './todo_item';


class TodoList extends Component{
    render(){
        const listElements = this.props.list.map(item =>{
            // return <li className="collection-item" key={item._id}>{item.title}</li>
            return <TodoItem key={item._id} title={item.title}/>
        })
        return (
            <ul className="collection">
                {listElements}
            </ul>
        )
    }
}

export default TodoList;