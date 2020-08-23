import React from 'react'
import Loading from './Loading'
import './Display.css'
class Display extends React.Component{
    // return (
    //     props.coursedetails.map(element=>{
    //     return(
    //         <div>
    //         <h3>Title :{element.title}</h3>
    //         <p>Instructor :{element.Instructor}</p>  
    //         <p>Details :{element.Details}</p>
    //         </div>
    //     )
    // })
    // )
    handlerOnclick = (event) => {
        return this.props.delete(event.target.id)
    }
    render(){
        const courselist = this.props.coursedetails.length?this.props.coursedetails.map((element)=>{
            return(
                <div class="course-display" key={element.id}>
                 <h3>Title :{element.title}</h3>
                 <h5>Details :{element.details}</h5>
                 <button id={element.id} onClick={this.handlerOnclick}>Delete</button>
                 </div>
            )
        }) : (<Loading/>)
        return(
            <div>
                {courselist}
            </div>
        )
    }
}

export default Display;