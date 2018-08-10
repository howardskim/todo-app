import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
import TodoList from './todo_list';
import AddItem from './add_item';
import listData from '../data/todo';
import axios from 'axios'


const BASE_URL = 'http://api.reactprototypes.com'
const API_KEY = '?key=thisismyapikey_69';

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
    
    //asynchronous function
    addItem = async (item) => {
        try{
            if(!item.title){
                throw new Error('Missing Title')
            }
            if(!item.details){
                throw new Error('Missing details')
            }
            await axios.post(`${BASE_URL}/todos${API_KEY}`, item);
            this.getListData();
        } catch(error){
            console.log('something went wrong', error.message)
        }
    }
    getListData = async () => {
        const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);
        this.setState({
            items: response.data.todos
        })
    }

    // getListData(){
    //     //This is where you would call the server for your data
    //     //axios.what type of request u want and it is a function
    //     //parameter is where you want to get the data from 
    //     //? means there will be key value pairs in the query string
    //     //?=value and multiple key value pairs are separated by '&'
    //     //promise is a way to handle asynchronous operations; once asynch operations are completed;
    //     //do this thing...THEN do this...just like success in ajax, a function goes into this then parameter
    //     axios.get(`${BASE_URL}/todos${API_KEY}`).then((response) => {
    //         this.setState({
    //             items: response.data.todos
    //         })
    //     }).catch((error) => {
    //         console.log(error.message);
    //     })
    // }

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

