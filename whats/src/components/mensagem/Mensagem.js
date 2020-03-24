import React from "react";
import styled from "styled-components";


const MensagemEnviada = styled.p`
    margin-left: 10px;
    padding: 20px;
    background-color: grey;
    min-width: 60px;
    max-width: 300px;
    min-height: 50px;
    max-height: 1000px;
    botton:10px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    position: relative;
    align-itens:"flex-start";

`;
const NomeDoUsuario = styled.span`
    font-weight: bolder;
     
`;

export class Mensagem extends React.Component {
    constructor(props) {
        super(props);
    }
    handleChange = () => {
        this.props.seOCaraDeletar(this.props.keyProps);
    }
    render() {
        return (
            <MensagemEnviada onDoubleClick={this.handleChange}>
                <NomeDoUsuario>{this.props.autor}</NomeDoUsuario> 
                {this.props.mensagem}
            </MensagemEnviada>
        );
    }
}

