import React from "react";
import { Chat } from "./components/chat/Chat.js";
import {Mensagem} from "./components/mensagem/Mensagem.js";
import styled from "styled-components";


const Container = styled.section`

    display: flex;
    justify-content: center;
`;
function App() {
    return (
        <Container>
            <Chat />
        </Container>
    );
}
export default App;