import React, { Component } from 'react'
import './Form.css'

class Form extends Component{
    state = {
        id:0,
        title:"",
        details:"",
        Instructor:""
    }

    handleonChange = (event) => {
        this.setState({[event.target.id]:event.target.value})
    }
    handleSubmit = (event) => {
         event.preventDefault();
      //  console.log(this.state);
        this.props.addcourse(this.state);
        this.setState({
            id:0,
            title:"",
            details:"",
            Instructor:""
        })
    }
    render(){
        return(
            <form className="basic" onSubmit={this.handleSubmit}>
                <label htmlFor="title">Course Name:</label>
                <input type="text" id="title" placeholder="enter you course name" onChange={this.handleonChange} value={this.state.title}></input><br></br>

                <label htmlFor="details">Details:</label>
                <input type="text" id="details" placeholder="enter you Details" onChange={this.handleonChange} value={this.state.details}></input><br></br>

                <label htmlFor="Instructor">Instructor:</label>
                <input type="text" id="Instructor" placeholder="Instructor" onChange={this.handleonChange} value={this.state.Instructor}></input><br></br>
                <button type="submit" value="submit">submit</button>
            </form>
        )
    }
}

export default Form;