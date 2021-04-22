import React from 'react';

import { Container, Retweeted, RocketseatIcon, Body, Avatar, Content, Header, Dot, Description, ImageContent, Icons, Status, CommentIcon, RetweetIcon, LikeIcon, } from './styles';

const Tweet: React.FC = () => {
  return (
      <Container>
          <Retweeted>
              <RocketseatIcon />
            Você retweetou
          </Retweeted>

          <Body>
              <Avatar />

              <Content>
                  <Header>
                    <strong>Grupo 777</strong>
                    <span>@grupo777</span>
                    <Dot />
                    <time>23 de abr</time>
                  </Header>

                  <Description>João Otário</Description>

                  <ImageContent />

                  <Icons>
                      <Status>
                          <CommentIcon />
                          100
                      </Status>
                      <Status>
                          <RetweetIcon />
                          897
                      </Status>
                      <Status>
                          <LikeIcon />
                          13k
                      </Status>
                  </Icons>
              </Content>
          </Body>
      </Container>
  );
}

export default Tweet;
