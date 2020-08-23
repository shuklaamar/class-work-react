import React from 'react';
import Display from './components/Display';
import Navbar from './components/Navbar';
import Form from './components/Form';
import './App.css';

class App extends React.Component {
  state = {
    Coursedetails :[
       {id:"1",title:"node",details:"Its a ggod thing",Instructor:"Important"},
       {id:"2",title:"React",details:"will learn",Instructor:"Important"},
       {id:"3",title:"CP",details:"Its a ggod thing",Instructor:"Important"},
       {id:"4",title:"C++",details:"Will do it soon",Instructor:"Important"}
      ]
}     
    addcourse = (course) => {
          course.id=Math.floor(Math.random()*100).toString();
          let arr=[...this.state.Coursedetails,course];
          this.setState({
          Coursedetails:arr
          })
    }
    navbar = (course) => {
      let arr = this.state.Coursedetails.filter((cours1)=>{
      // console.log(course);
        return cours1.Instructor === course; 
      })
      console.log(arr);
      this.setState({
        Coursedetails:arr
      })
    }

    delete = (course) => {
     // console.log(course)
      let arr = this.state.Coursedetails.filter((course1)=>{
        console.log(course1.id)
        return course1.id !== course;
      })
      console.log(arr);
      this.setState({
        Coursedetails:arr
      })
    }
  render(){
    return (
      <div className="App">
        <h1>Your To-Do List</h1>
        <Navbar filte={this.navbar}/>
        <Display
        coursedetails={this.state.Coursedetails}
        delete={this.delete}
        />
        <Form addcourse={this.addcourse}/>
      </div>
    );
  }
}

export default App;
