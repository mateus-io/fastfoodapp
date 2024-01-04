import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View
        style={styles.averageCost}
      >
        <Text
          style={styles.averageCostLabel}
        >
          $1.90
        </Text>
      </View>
      <Text style={styles.title}>Tab 1</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  averageCost: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#FF3D71',
    marginTop: 6,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 10
  },
  averageCostLabel: {
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: 12,
    color: '#FFFFFF'
  }
});
