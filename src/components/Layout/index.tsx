import React from 'react'
import Main from '../Main';
import { Container, Wrapper } from './styles';
import MenuBar from '../MenuBar';
import SideBar from '../SideBar'

export default function index() {
    return (
        <div>
            <Container>
                <Wrapper>
                    <MenuBar />
                    <Main />
                    <SideBar />
                </Wrapper>
            </Container>
        </div>
    )
}
