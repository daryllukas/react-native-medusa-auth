import { StyleSheet, View } from 'react-native';
import { Button, Input } from '@rneui/themed';
import { useContext, useState } from 'react';
import { medusaClient } from '../lib/medusa-client';
import { StoreContext } from '../context/store-context';
import { Alert } from 'react-native';

export default function RegisterScreen({ navigation }) {
  const { setCustomer } = useContext(StoreContext);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
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
    medusaClient.customers
      .create({
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.email,
        password: values.password,
      })
      .then(({ customer }) => {
        setCustomer(customer);
      })
      .catch((err) => {
        setCustomer(null);
        Alert.alert('Error', 'Registration failed');
      });
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="First Name"
        style={styles.input}
        value={values['firstName']}
        onChange={handleChange('firstName')}
      />
      <Input
        placeholder="Last Name"
        style={styles.input}
        value={values['lastName']}
        onChange={handleChange('lastName')}
      />
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
        title="I already have an account"
        type="clear"
        size="lg"
        onPress={() => navigation.replace('Login')}
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
