import React from "react";
import styled from "styled-components";
import {Chat} from "../chat/Chat";


const MensagemEnviada = styled.p`
    margin-left: 10px;
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

