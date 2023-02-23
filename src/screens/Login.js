import { StyleSheet, View } from 'react-native';
import { Button, Input } from '@rneui/themed';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
      />
      <Input placeholder="Password" style={styles.input} />
      <Button size="lg" containerStyle={styles.button} title="Submit" />
      <Button
        title="I don't have an account"
        type="clear"
        size="lg"
        onPress={() => navigation.replace('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    marginBottom: 15,
  },

  button: {
    marginBottom: 20,
  },
});
