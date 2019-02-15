import React, { Component } from 'react';
import './styles.css';

class Menu extends Component {
    render() { 
        return (
            <div className="Box">
            <button><i class="fas fa-home"/></button>
            <button><i class="fas fa-search"/></button>
            <button><i class="fas fa-cog"/></button>
            <button><i class="fas fa-user-circle"/></button>
            </div>


         )
    }
}
 
export default Menu;