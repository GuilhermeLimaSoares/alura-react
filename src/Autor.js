import React, { Component } from 'react';
import $ from 'jquery';
import InputCustomizado from './components/InputCustomizado';

export class FormularioAutor extends Component{
    constructor() {
        super();
        this.state = {lista : [],nome:'',email:'', senha:''};
        this.enviaForm = this.enviaForm.bind(this);
        this.setNome = this.setNome.bind(this);
        this.setEmail = this.setEmail.bind(this);
        this.setSenha = this.setSenha.bind(this);
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
            this.props.callbackAtualizaListagem(resposta);
            // this.setState({lista:resposta});
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

      render() {
        return (
            <div className="pure-form pure-form-aligned">
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
        )
    }
}

export class TabelaAutores extends Component{

    // constructor() {
    //     super();
    //     this.state = {lista : []};
    //   }
    
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
  //       // this.setState({lista:resposta});
  //       this.setState({lista:resposta.filter((row) => {
  //           return row.nome.search(/[a-z]/g) === 0;
  //       })});
  //     }.bind(this)
  //   });
  // }
        render() {
            return(
                    <div>            
                          <table className="pure-table">
                            <thead>
                              <tr>
                                <th>Nome</th>
                                <th>email</th>
                              </tr>
                            </thead>
                            <tbody>
                              {
                                this.props.lista.map(function(autor){
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
          );
        }
}

export default class AutorBox extends Component {
  constructor(){
    super();
    this.state = {lista: []};
    this.atualizaListagem = this.atualizaListagem.bind(this);
  }

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
        // this.setState({lista:resposta});
        this.setState({lista:resposta.filter((row) => {
            return row.nome.search(/[a-z]/g) === 0;
        })});
      }.bind(this)
    });
  }

  atualizaListagem(novaLista){
    this.setState({lista:novaLista});
  }

  render() {
    return (
      <div>
        <FormularioAutor callbackAtualizaListagem={this.atualizaListagem}/>
        <TabelaAutores lista={this.state.lista}/>
      </div>
     
    );
  }
}