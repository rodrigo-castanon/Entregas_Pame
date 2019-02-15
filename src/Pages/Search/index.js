import React, {Component,Fragment } from 'react';
import './styles.css';
import MusicList from '../../components/MusicList/MusicList';
import api from '../../services/api';


export default class Search extends Component{

  state = {
    songInput:'',
    songs:[],
  };
  
  handleAddSong = async (event) => {
      event.preventDefault();

      try{
        const response = await api.get(`/songs/${this.state.songInput}`);

        console.log(response);
        
        this.setState({
          songInput:'',
          songs: [...this.state.songs, response.data],
        })

      }catch (err){
        console.log(err);
      }
  };

  render(){
    return(
      <Fragment>
        <div className="display">

          <form className="form" onSubmit={this.handleAddSong}>
            <input 
            type="text"
            placeholder='Pesquisa'
            className="input"
            value = {this.state.songInput}
            onChange={event => this.setState({songInput: event.target.value})}
              />
          </form>

          <MusicList songs={this.state.songs}/>

        </div> 
      </Fragment>
    )
  }
};


