import React from "react";
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Mensagem } from "../mensagem/Mensagem";
import crop from "../img/bg.png";
import sendMessage from "../img/send-message.png";
import novoContato from "../img/adicionar-contato.png";
import logo from "../img/logo.png";

const Header = styled.header`
    
        
`;

const Template = styled.section`
    color: white;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 500px;
    min-height: 100vh;
    justify-content: flex-end;
    box-sizing: border-box;
    padding-bottom: 60px;
    background-image:url(${crop}); 
`;
const Form = styled.div`
    
    position: fixed;
    box-sizing: border-box;
    bottom: 0;
    display: flex;
    width: 500px;
    height: 64px;
`;
const BarraInput = styled.input`
    flex: 1;
    width: 420px;
    
    
`;
const Button = styled.button`
    background-image: url(${sendMessage});
    height: 90px;
    width: 65px;
    
`;

export class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valorInputUsuario: "",
            valorInputMensagem: "",
            mensagens: []
        };
    }
    inserirUsuario = event => {
        this.setState({
            valorInputUsuario: event.target.value
        });
    };
    inserirMensagem = event => {
        this.setState({
            valorInputMensagem: event.target.value
        });
    };
    enviarMensagem = () => {
        if (this.state.valorInputUsuario && this.state.valorInputMensagem) {
            
            const valorDoEstadoDoAutor = this.state.valorInputUsuario;
            const valorDoEstadoDaMensagem = this.state.valorInputMensagem;
            const objetoMensagem = {
                autor: valorDoEstadoDoAutor,
                mensagem: valorDoEstadoDaMensagem
            };
            const listaDeMensagemAtuais = [
                ...this.state.mensagens,
                objetoMensagem
            ];
            this.setState({
                mensagens: listaDeMensagemAtuais
            });
            this.limparCampos();

            
        }
    };
    apertaEnter = event => {
        if (event.which === 13) {
            this.enviarMensagem();
        }
    };
    limparCampos = () => {
        this.setState({
            valorInputMensagem: "",
            // valorInputUsuario: ""
        });
    };
    deletarMensagem = event => {
        const mensagensAtuais = [...this.state.mensagens];
        const mensagensMantidas = mensagensAtuais.filter((element, index) => {
            if (index === event) {
                return false;
            }
            return true;
        });
        console.log(event, mensagensMantidas);
        this.setState({
            mensagens: mensagensMantidas
        });
    };


    render() {
        const listaDeMensagem = this.state.mensagens.map((element, index) => {
            return (
                <Mensagem
                    autor={element.autor}
                    mensagem={element.mensagem}
                    key={index}
                    keyProps={index}
                    seOCaraDeletar={this.deletarMensagem}
                />
            );
        });

        return (
            <Template>
                {listaDeMensagem}
                <header>
                    
                </header>
                <Form>
                    <input
                        type="text"
                        placeholder="Usuário"
                        onChange={this.inserirUsuario}
                        value={this.state.valorInputUsuario}
                    />
                    <BarraInput
                        type="text"
                        placeholder="Mensagens"
                        onChange={this.inserirMensagem}
                        onKeyPress={this.apertaEnter}
                        value={this.state.valorInputMensagem}
                    />
                    <Button onClick={this.enviarMensagem}></Button>
                </Form>
            </Template>
        );
    }
}
export default Chat;