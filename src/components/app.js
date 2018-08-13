import 'materialize-css/dist/css/materialize.min.css';
import React, {Component} from 'react';
//to define the route, we need to import it
import {Route, Switch} from 'react-router-dom';
// import TodoList from './todo_list';
// import AddItem from './add_item';
import axios from 'axios'
import Home from './home';
import NotFound from './404';
import ItemDetails from './item_details';
import config from '../config';

// const BASE_URL = 'http://api.reactprototypes.com'
// const API_KEY = '?key=thisismyapikey_69';
//need to change to a class component

class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            items: [],
        }
    }
    //delete this since we need to use it in home.js instead of app.js
    // componentDidMount(){
    //     this.getListData();
    // }
    
    //asynchronous function
    addItem = async (item) => {
        // const {api: {BASE_URL, API_KEY}} = config;

        const {BASE_URL, API_KEY} = config.api;
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
    // getListData = async () => {
    //     const { BASE_URL, API_KEY } = config.api;

    //     const response = await axios.get(`${BASE_URL}/todos${API_KEY}`);
    //     this.setState({
    //         items: response.data.todos
    //     })
    // }

    async deleteItem(id){
        const { BASE_URL, API_KEY } = config.api;
        try{
            const resp = await axios.delete(`${BASE_URL}/todos/${id + API_KEY}`);
            console.log('resp: ', resp)
        } catch (error){
            console.log('error: ', error);
        }

    }

    getListData(){
        const { BASE_URL, API_KEY } = config.api;

        //This is where you would call the server for your data
        //axios.what type of request u want and it is a function
        //parameter is where you want to get the data from 
        //? means there will be key value pairs in the query string
        //?=value and multiple key value pairs are separated by '&'
        //promise is a way to handle asynchronous operations; once asynch operations are completed;
        //do this thing...THEN do this...just like success in ajax, a function goes into this then parameter
        axios.get(`${BASE_URL}/todos${API_KEY}`).then((response) => {
            this.setState({
                items: response.data.todos
            })
        }).catch((error) => {
            console.log(error.message);
        })
    }

    render(){
        //render prop takes a function like how component takes a function and we can define it. but we need to pass the routing props as the argument
        //use render, give it a callback, pass in routing props as argument; you can use exact component = {(props) => {} } but use RENDER it works because component takes a component. the thing below is actually a functional component which takes props as an argument and returns some jsx
        // console.log('todo list', this.state.items)
        
        return (
        <div className="container">
            <Switch>
                <Route exact path="/" 
                    render= {(routeProps) => {
                    return <Home add={this.addItem} list={this.state.items} getList={this.getListData.bind(this)} {...routeProps} />
                }} />

                <Route 
                    path="/item-details/:item_id" 
                    render= {(routeProps) => {
                        return <ItemDetails delete = {this.deleteItem.bind(this)} {...routeProps}/>
                    }} 
                />
                <Route component={NotFound}/>
            </Switch>
        </div>
        );
    }
}

export default App;

