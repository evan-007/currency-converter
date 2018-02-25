import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
})

const Home = () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <View />
    <Logo />
  </Container>
)

export default Home;
