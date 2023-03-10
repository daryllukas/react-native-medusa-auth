import { StyleSheet, View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { useState } from 'react';
import { medusaClient } from '../lib/medusa-client';
import { StoreContext } from '../context/store-context';
import { Alert } from 'react-native';

export default function LoginScreen({ navigation }) {
  const { setCustomer } = useContext(StoreContext);

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (fieldName) => (e) => {
    let newValue = e.nativeEvent.text;
    setValues({
      ...values,
      [fieldName]: newValue,
    });
  };

  const handleSubmit = () => {
    medusaClient.auth
      .authenticate({
        email: values.email,
        password: values.password,
      })
      .then(({ customer }) => {
        setCustomer(customer);
      })
      .catch((err) => {
        setCustomer(null);
        Alert.alert('Error', 'Login failed');
      });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        value={values['email']}
        onChange={handleChange('email')}
      />
      <Input
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={values['password']}
        onChange={handleChange('password')}
      />
      <Button
        size="lg"
        containerStyle={styles.button}
        title="Submit"
        onPress={handleSubmit}
      />
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
