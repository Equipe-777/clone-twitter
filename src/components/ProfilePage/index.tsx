import React from 'react';

import Feed from '../Feed'

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
            <Avatar />
          </Banner>

          <ProfileData>
            <EditButton outlined>Editar perfil</EditButton>

            <h1>Grupo 777</h1>
            <h2>@grupo_777</h2>

            <p>
              Developer at <a href="https://www.google.com.br">@Rocketseat</a>
            </p>

            <ul>
              <li>
                <LocationIcon/>
                São Paulo, Brasil
              </li>
            </ul>

            <ul>
              <li>
                <CakeIcon/>
                Nascido(a) em 09 de setembro de 2020
              </li>
            </ul>

            <Followage>
              <span>
                seguindo <strong>100</strong>
                </span>
              <span>
              <strong>100000</strong> seguidores
                </span>
            </Followage>
          </ProfileData>
          <Feed />
        </Container>
  );
}

export default ProfilePage;