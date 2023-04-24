import React from 'react';
import { SafeAreaView } from 'react-native';

import Display from './components/Display/Display';

export default function App() {
  return (
    <SafeAreaView style={{backgroundColor: '#17181a'}}>
      <Display />
    </SafeAreaView>
  );
}