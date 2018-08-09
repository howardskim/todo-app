import React, {Component} from 'react';
import listData from '../data/todo';

class TodoList extends Component{
    render(){
        const listElements = listData.map(item =>{
            return <li className="collection-item" key={item._id}>{item.title}</li>
        })
        return (
            <ul className="collection">
                {listElements}
            </ul>
        )
    }
}

export default TodoList;