import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import TodoList from './todo_list';
import AddItem from './add_item';
import listData from '../data/todo';
//need to change to a class component

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: [],
        }
    }
    componentDidMount(){
        this.getListData();
    }
    
    addItem = (item) => {
        item._id = new Date().getTime();
        this.setState({
            //item goes on top because of this order
            items: [item, ...this.state.items]
        })
    }

    getListData(){
        //This is where you would call the server for your data

        this.setState({
            items: listData
        })
    }
    render(){
        console.log(this.state.items)
        return (
        <div className="container">
                <h1 className="center">To Do List</h1>
                
                <AddItem add ={this.addItem}/>
                <TodoList list={this.state.items}/>
            </div>
        );
    }
}

export default App;

