import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { View, StatusBar } from 'react-native';

import { Container } from '../components/Container';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
})

const Home = () => (
  <Container>
    <StatusBar translucent={false} barStyle="light-content" />
    <View />
  </Container>
)

export default Home;
