import { Button } from '@rneui/themed';
import { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StoreContext } from '../context/store-context';
import { medusaClient } from '../lib/medusa-client';

export default function HomeScreen() {
  const { setCustomer, customer } = useContext(StoreContext);
  const handleLogout = async () => {
    medusaClient.auth.deleteSession().then(() => {
      setCustomer(null);
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        Welcome, {`${customer.first_name} ${customer.last_name}`}. Happy
        Shopping!
      </Text>
      <Button
        size="lg"
        containerStyle={styles.button}
        title="Logout"
        onPress={handleLogout}
      />
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
  welcomeText: {
    margin: 20,
    fontSize: 32,
    textAlign: 'center',
  },
  button: {
    margin: 10,
  },
});