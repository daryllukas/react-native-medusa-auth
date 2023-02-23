import { StyleSheet, View } from 'react-native';
import { Button, Input } from '@rneui/themed';

export default function RegisterScreen() {
  return (
    <View style={styles.container}>
      <Input placeholder="First Name" style={styles.input} />
      <Input placeholder="Last Name" style={styles.input} />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
      />
      <Input placeholder="Password" style={styles.input} />
      <Button size="lg" containerStyle={styles.button} title="Submit" />
      <Button title="I already have an account" type="clear" size="lg" />
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