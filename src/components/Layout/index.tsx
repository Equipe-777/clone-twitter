import React from 'react'
import Main from '../Main';
import { Container, Wrapper } from './styles';
import MenuBar from '../MenuBar';

export default function index() {
    return (
        <div>
            <Container>
                <Wrapper>
                    <MenuBar />
                    <Main />
                    {/* <Sidebar /> */}
                </Wrapper>
            </Container>
        </div>
    )
}
