
import React, {Component} from 'react';
import TodoList from './todo_list';
import AddItem from './add_item';

class Home extends Component {
    render(){
        console.log(this.props);
        const {add, list} = this.props;

        return (
            <div>
                <h1 className="center">To Do List</h1>
                <AddItem add={add} />
                <TodoList list={list} />
            </div>
        )
    }
}

export default Home;