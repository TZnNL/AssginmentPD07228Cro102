import { StyleSheet, Text, View } from 'react-native';
import NavStackApp from './navigator/NavStackApp';
export default function App() {
  return (
    <NavStackApp/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
