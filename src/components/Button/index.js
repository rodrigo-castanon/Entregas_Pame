import React, { Component } from 'react';
import './styles.css';


class Button extends Component {
    render() { 
        return ( 
        <div className="play2">

        <button><i class="fas fa-angle-double-left"/></button>
        <button><i class="far fa-play-circle"/></button>
        <button><i class="fas fa-forward"/></button>
        </div>
            )
    }
}
 
export default Button;