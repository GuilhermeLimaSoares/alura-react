import React, { Component} from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
// import {FormularioAutor, TabelaAutores} from './Autor'
import AutorBox from './Autor';
// function App() {

class App extends Component{ 

  constructor() {
    super();
    this.state = {lista : []};

    ///antes da refatoração

    // this.state = {lista: [{nome:'Waldemar', email:'alberto.souza@caelum.com.br', senha:'123456'}]};
    // this.state = {lista: [], nome:'', email:'', senha:''};
    // this.enviaForm = this.enviaForm.bind(this);
    // this.setNome = this.setNome.bind(this);
    // this.setEmail = this.setEmail.bind(this);
    // this.setSenha = this.setSenha.bind(this);
    // $.ajax({
    //   url:"http://cdc-react.herokuapp.com/api/autores",
    //   dataType: 'json',
    //   success: function(resposta){
    //     this.state = {lista:resposta};
    //   }
    // });
  }

  // componentWillMount(){ // chama método antes de inicializar o render();
  //   console.log('WillMount'); //é chamado antes
  //   $.ajax({
  //     url:"http://cdc-react.herokuapp.com/api/autores",
  //     dataType: 'json',
  //     success: function(resposta){
  //       // console.log(resposta);
  //       console.log('chamou a resposta');
  //       // this.state = {lista:resposta};
  //       this.setState({lista:resposta});
  //     }.bind(this)
  //   });
  // }

  // componentDidMount(){ // chamado depois da primeira reenderização
  //   console.log('DidMount');
  //   $.ajax({
  //     url:"http://cdc-react.herokuapp.com/api/autores",
  //     dataType: 'json',
  //     success: function(resposta){
  //       // console.log(resposta);
  //       console.log('chamou a resposta');
  //       console.log(resposta);
  //       // this.state = {lista:resposta};
  //       this.setState({lista:resposta});
  //     }.bind(this)
  //   });
  // }

  // enviaForm(event){
  //   console.log('dados enviados');
  //   console.log(event);
  //   event.preventDefault();
  //   $.ajax({
  //     url:"http://cdc-react.herokuapp.com/api/autores",
  //     contentType:'application/json',
  //     dataType: 'json',
  //     type:'post',
  //     data: JSON.stringify({nome:this.state.nome, email:this.state.email, senha:this.state.senha}),
  //     success: function(resposta){
  //       // console.log(resposta);
  //       console.log('dados enviados com sucesso');
  //       this.setState({lista:resposta});
  //     }.bind(this),
  //     error: function(resposta){
  //     console.log('error');
  //     }
  //   })
  // }

  // setNome(evento){
  //   this.setState({nome:evento.target.value});
  // }

  // setEmail(evento){
  //   this.setState({email:evento.target.value});
  // }

  // setSenha(evento){
  //   this.setState({senha:evento.target.value});
  // }

render(){
  console.log('render');
  return (
    <div id="layout">
    <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
    </a>

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="">Company</a>

            <ul className="pure-menu-list">
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Home</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Autor</a></li>
                <li className="pure-menu-item"><a href="#" className="pure-menu-link">Livro</a></li>
            </ul>
        </div>
    </div>

    <div id="main">
        <div className="header">
          <h1>Cadastro de Autores</h1>
        </div>
        <div className="content" id="content">
          <AutorBox/>
          {/* <FormularioAutor/>
          <TabelaAutores/>            */}
        </div>
      </div>            
</div>
  );
}
  
}

export default App;
