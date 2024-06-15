import {StyleSheet, View, Image} from 'react-native';

export default function Logo() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/gyno.png')}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: '150%',
  },
});
