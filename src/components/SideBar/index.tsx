import React from 'react';

import StickyBox from 'react-sticky-box';

import List from '../List'

import FollowSuggestion from '../FollowSuggestion';

import News from '../News';

import { Container, SearchWrapper, SearchInput, SearchIcon, Body } from './styles';

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Buscar no Twitter" />
        <SearchIcon />
      </SearchWrapper>

    <StickyBox>
      <Body>
        <List 
          title="Talvez você curta"
          elements={[
            <FollowSuggestion 
            name="Patrick de Almeida" nickname="@katkitlol"
            />,
            <FollowSuggestion 
            name="Mario Lucca" nickname="@Luccas2sz"
            />,
            <FollowSuggestion 
            name="João Otávio" nickname="@LDS_GHOST"
            />,
            <FollowSuggestion 
            name="Oséias Farias" nickname="@Oseias__"
            />,
          ]}
        />
        <List 
          title="Talvez você curta"
          elements={
            [ <News /> ]
          }
        />
      </Body>
    </StickyBox>
    </Container>
    );
}

export default SideBar;