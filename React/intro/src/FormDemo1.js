import React, { Component } from 'react';
import { Form, Input } from 'reactstrap';

class FormDemo extends Component {
    state={userName:"",city:""}
    onChangeHandler=(event)=>{
        // this.setState({userName:event.target.value})
        // this.setState({city:event.target.value})

        let name=event.target.name;
        let value=event.target.value

        this.setState({[name]:value})

    }
    onSubmitHandler=(event)=>{
        event.preventDefault();
        alert(this.state.userName)
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <h3>User Name</h3>
                    <Input name='userName' onChange={this.onChangeHandler} type='text'></Input>
                    <h3> User Name is: {this.state.userName}</h3>

                    <h3>City</h3>
                    <Input name='city' onChange={this.onChangeHandler} type='text'></Input>
                    <h3>City: {this.state.city}</h3>

                    <h3>User Name</h3>
                    <Input onChange={this.onChangeHandler} type='text'></Input>
                    <h3> User Name is: {this.state.userName}</h3>
                    <Input type='submit' value="Save"></Input>
                </Form>
            </div>
        );
    }
}

export default FormDemo;