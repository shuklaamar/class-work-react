import React from 'react'
import './Navbar.css'

class Navbar extends React.Component{
    render(){
        return(
            <div class="navbar">
            <p id="Gryffindor" onClick={() => {
                return this.props.filte("Important")
            }}>Important</p>
            <p id="General" onClick={() => {
                return this.props.filte("General")
            }}>General</p>
        
            </div>
        )
    }
}
export default Navbar;