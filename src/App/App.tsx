import React from 'react';
import { FlatList, SafeAreaView } from 'react-native';

import { Provider } from 'urql';

import { data } from '../../data/data';
import { client } from '../../server/client';

import { SkateparkSummaryCard } from './components/SkateparkSummaryCard';

const App = () => {
  const renderItem = item => {
    return (
      <SkateparkSummaryCard
        name={item.item.name}
        location={item.item.location}
        elements={item.item.elements}
        image={item.item.image}
      />
    );
  };

  return (
    <Provider value={client}>
      <SafeAreaView>
        <FlatList renderItem={renderItem} data={data.skateParks} />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
