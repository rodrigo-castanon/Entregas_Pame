import React, { Component } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';

class Dropdownbutton extends Component{
    render(){
        return(
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Menu</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Playlists</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Artistas</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
        )
    }
}

export default Dropdownbutton;