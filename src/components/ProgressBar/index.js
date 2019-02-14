import React, { Component } from 'react';
import './styles.css';

const Filler =(props) =>{
    return<div className="filler"/>
}

const ProgressBar = (props) =>{
    return(

        <div className="progress_bar">
        <Filler />
        </div>
    )
}

class RealProgress extends Component{
    render(){
    return(
        <ProgressBar />
    )
    }
}

export default RealProgress;