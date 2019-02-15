import React, {Component} from 'react';
import './styles.css';

class Pesquisa extends Component{
render(){
return(

<form className="form">
<input 
type="text"
placeholder='Pesquisa'
className="input"
/>
</form>
)
}
}
export default Pesquisa;