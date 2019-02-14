import React, { Component } from "react";
import './App.css';
import logo from './tutana.jpeg';//importa logo da capa do album
import RealProgress from './components/ProgressBar';//importa barra de progresso
import Dropdownbutton from './components/Dropdown';//importa botao estilo dropdown



class App extends Component {
  render() {
    return (
      <body>
          <h1>.</h1>
          <div className="menu">
          <Dropdownbutton />
          </div>

          <p>{/*insercao da capa do album*/}
          <img class="album_capa" src={logo} alt="Logo" />
          </p>
  
        <div class="musica_texto">{/*insercao do nome da musica*/}
            Tu ta na Gaiola
       </div>
        
        <div className="album_texto">{/*insercao do nome do album*/}
        Baile da Penha - Kevin o Chris
        </div>

        <div className="progressobarra">{/*insercao do nome do album*/}
        <RealProgress/> 
        </div>

         <div className="play">{/*insercao de botoes play/foward/back*/}
            <div class="btn-group" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-secondary"><i class="fas fa-step-backward"/></button>
              <button type="button" class="btn btn-secondary"><i class="fas fa-play"/></button>
              <button type="button" class="btn btn-secondary"><i class="fas fa-step-forward"/></button>
            </div>
        </div>


          <div className="menu_inferior">{/*insercao do "like" e dos pontinhos*/}
          <button className="heart"><i class="far fa-heart"></i></button>
          <button className="dots"><i class="fas fa-ellipsis-v"/></button>
          </div>
        <h3>.</h3>


      </body>


    );
  }
}

export default App;
