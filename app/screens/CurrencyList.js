import React from 'react';
import { FlatList, Text, View, StatusBar } from 'react-native';

import currencies from '../data/currencies'

const CurrencyList = () => (
  <View style={{ flex: 1 }}>
    <StatusBar barStyle="default" transculent={false} />
    <FlatList data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item) => item}
    />
  </View>
)

export default CurrencyList;
