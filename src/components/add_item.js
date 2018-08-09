import React, {Component} from 'react';

class AddItem extends Component {
    state = {
        title: '',
        details: ''
    }

    handleInputChange = (event) => {
        const{name, value} = event.target;
        console.log(name);
        this.setState({
            [name]: value
        })
    }
    handleAddItem = (event) => {
        //if we try to submit a form, the page refreshes... it is because the form is trying to use its default behavior and send your information to some different page
        event.preventDefault();
        //this is where all of our form data is
        console.log(this.state);
        //add function takes in an OBJECT which is {title: '', details: ''}
        this.props.add(this.state);
        this.setState({
            title: '',
            details: ''
        })
    }

    render(){
        //taking properties form the object and creating variables as the same name as what the property was
        const{title, details} = this.state;

        return (
            <form onSubmit={this.handleAddItem}>
                <div className="row">
                    <div className="col s6">
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.handleInputChange} value={title}/>
                    </div>
                    <div className="col s6">
                        <label>Details</label>
                        <input type="text" name="details" onChange={this.handleInputChange} value={details}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col s12 right-align">
                        <button className="btn blue lighten-3">Add Item</button>
                    </div>
                </div>
            </form>
        )
    }
}
export default AddItem;