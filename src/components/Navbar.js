import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{
   
    render(){
        return(
            <div class="navbar">
            <p id="Gryffindor" >Gryffindor</p>
            <p id="Slytherin">Slytherin</p>
            <p id="Hufflepuff">Hufflepuff</p>
            <p id="Ravenclaw">Ravenclaw</p>
            </div>
        )
    }
}
export default Navbar;