import { StyleSheet, Text, View } from 'react-native';
import params from './src/params';

import Field from './src/components/Field';

export default () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>==-=== Welcome to MineField! ===-==</Text>
      <Text style={styles.subtitle}>grid size:
        {params.getColumnsAmount()}x{params.getRowsAmount()}
      </Text>

      <Field />
      <Field opened />
      <Field opened nearMines={1} />
      <Field opened nearMines={2} />
      <Field opened nearMines={4} />
      <Field opened nearMines={8} />

      <Field mined />
      <Field mined opened />
      <Field mined opened exploded/>

      <Field flagged/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 18,
  }
});
