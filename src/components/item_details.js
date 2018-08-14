import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import config from '../config';
import axios from 'axios';

class ItemDetails extends Component{
    state = {
        itemDetails: null
    }
    async componentDidMount(){
        const{item_id} = this.props.match.params;
        const {BASE_URL, API_KEY} = config.api;

        const resp = await axios.get(`${BASE_URL}/todos/${item_id}${API_KEY}`);
        console.log('DETAIL RESPONSE: ', resp);
        this.setState({
            itemDetails: resp.data.todo
        })
    }
    async handleDelete(){
        console.log(this.props.history);
        console.log(this.state.itemDetails._id)
       await this.props.delete(this.state.itemDetails._id);
    
       // push into where you want to navigate to... programitcally rerouting somewhere..
       //if the function has an await in front of it, it will automatically return a promise
       this.props.history.push('/');
    }
    async handleToggleComplete(){
        const todoItem = await this.props.toggleComplete(this.state.itemDetails._id);

        console.log('item details toggle complete response: ', todoItem);
        this.setState({
            itemDetails: todoItem
        })
    }
    render(){
        const {itemDetails} = this.state;
        console.log('item details>>>>>> ', itemDetails);

        if(!itemDetails){
            return (<h1 className="grey-text">Loading...</h1>)
        }
        return(
            <div>
                <h1 className="center">Item Details</h1>
                <div className="row">
                    <div className="col s12 right-align">
                        <Link to="/" className="btn red darken-4">Back to List</Link>
                    </div>
                </div>
                <h4 className="center"> Title: {itemDetails.title}</h4>
                <h5 className="center">Details: {itemDetails.details}</h5>
                <h5>
                    {
                        itemDetails.complete
                            ? 'Item Complete'
                            : 'Item is not yet complete'
                    }
                </h5>
                <div className="row">
                    <div className="col s6 center">
                        <button onClick={this.handleToggleComplete.bind(this)} className="btn green">Toggle Complete</button>
                    </div>
                    <div className="col s6 center">
                        <button onClick={this.handleDelete.bind(this)}className="btn orange">Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default ItemDetails;