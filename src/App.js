import React, { Component} from 'react';
import './css/pure-min.css';
import './css/side-menu.css';
import $ from 'jquery';
import InputCustomizado from './components/InputCustomizado';
// function App() {

class App extends Component{ 

  constructor() {
    super();
    // this.state = {lista: [{nome:'Waldemar', email:'alberto.souza@caelum.com.br', senha:'123456'}]};
    this.state = {lista: [], nome:'', email:'', senha:''};
    this.enviaForm = this.enviaForm.bind(this);
    this.setNome = this.setNome.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setSenha = this.setSenha.bind(this);
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

  componentDidMount(){ // chamado depois da primeira reenderização
    console.log('DidMount');
    $.ajax({
      url:"http://cdc-react.herokuapp.com/api/autores",
      dataType: 'json',
      success: function(resposta){
        // console.log(resposta);
        console.log('chamou a resposta');
        console.log(resposta);
        // this.state = {lista:resposta};
        this.setState({lista:resposta});
      }.bind(this)
    });
  }

  enviaForm(event){
    console.log('dados enviados');
    console.log(event);
    event.preventDefault();
    $.ajax({
      url:"http://cdc-react.herokuapp.com/api/autores",
      contentType:'application/json',
      dataType: 'json',
      type:'post',
      data: JSON.stringify({nome:this.state.nome, email:this.state.email, senha:this.state.senha}),
      success: function(resposta){
        // console.log(resposta);
        console.log('dados enviados com sucesso');
        this.setState({lista:resposta});
      }.bind(this),
      error: function(resposta){
      console.log('error');
      }
    })
  }

  setNome(evento){
    this.setState({nome:evento.target.value});
  }

  setEmail(evento){
    this.setState({email:evento.target.value});
  }

  setSenha(evento){
    this.setState({senha:evento.target.value});
  }

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

    <div id="menu">
        <div className="pure-menu">
            <a className="pure-menu-heading" href="#">Company</a>

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
              <div className="pure-form pure-form-aligned">
                {/* <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm.bind(this)} method="post">
                  <div className="pure-control-group">
                    <label htmlFor="nome">Nome</label> 
                    <input id="nome" type="text" name="nome" value={this.state.nome}  onChange={this.setNome}/>                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="email">Email</label> 
                    <input id="email" type="email" name="email" value={this.state.email}  onChange={this.setEmail}/>                  
                  </div>
                  <div className="pure-control-group">
                    <label htmlFor="senha">Senha</label> 
                    <input id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha}/>                                      
                  </div>
                  <div className="pure-control-group">                                  
                    <label></label> 
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
          
                </form>              */}

                <form className="pure-form pure-form-aligned" onSubmit={this.enviaForm} method="post">
                  <InputCustomizado id="nome" type="text" name="nome" value={this.state.nome} onChange={this.setNome} label="Nome"/>                                              
                  <InputCustomizado id="email" type="email" name="email" value={this.state.email} onChange={this.setEmail} label="Email"/>                                              
                  <InputCustomizado id="senha" type="password" name="senha" value={this.state.senha} onChange={this.setSenha} label="Senha"/>                                          
                  <div className="pure-control-group">   
                    <label></label>
                    <button type="submit" className="pure-button pure-button-primary">Gravar</button>                                    
                  </div>
                </form>

              </div>  
              <div>            
                <table className="pure-table">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>email</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* <tr>
                      <td>Alberto</td>                
                      <td>alberto.souza@caelum.com.br</td>                
                    </tr> */
                    this.state.lista.map(function(autor){
                      return (
                          <tr key={autor.id}>
                            <td>{autor.nome}</td>
                            <td>{autor.email}</td>
                          </tr>
                        );
                    })
                    }
                  </tbody>
                </table> 
              </div>             
            </div>
          </div>            
</div>
  );
}
  
}

export default App;
