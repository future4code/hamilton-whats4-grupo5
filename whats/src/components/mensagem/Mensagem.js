import React from "react";
import styled from "styled-components";
import {Chat} from "../chat/Chat";

// const valorInputUsuario = 

// if(valorInputUsuario === "Eu"){
//     const MensagemEnviada = styled.MensagemEnviada`
//     margin-right: 10px;
//     padding: 20px;
//     background-color: grey;
//     width: 200px;
//     botton:10px;
//     border-radius: 20px;
//     justify-content: flex-end;
//     `;
// }else{
//     const MensagemEnviada = styled.MensagemEnviada`
//     margin-right: 10px;
//     padding: 20px;
//     background-color: grey;
//     width: 200px;
//     botton:10px;
//     border-radius: 20px;
//     justify-content: flex-end;
//     `;
// }


const MensagemEnviada = styled.p`
    margin-left: 10px;
    padding: 20px;
    background-color: grey;
    width: 200px;
    botton:10px;
    border-radius: 20px;

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
                <NomeDoUsuario>{this.props.autor}</NomeDoUsuario>: 
                {this.props.mensagem}
            </MensagemEnviada>
        );
    }
}

