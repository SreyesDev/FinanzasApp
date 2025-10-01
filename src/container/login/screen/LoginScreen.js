import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, SafeAreaView, StatusBar } from 'react-native';
import NavigationService from '../../root/navigation/NavigationService';

// Import Icons
import ArrowLeftIcon from '../../../assets/icons/arrow-left-grey.svg';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Validación y manejo del login basica
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa email y contraseña');
      return;
    }

    //lógica de autenticación
    if (email && password) {
      Alert.alert('Éxito', 'Login exitoso', [
        { text: 'OK', onPress: () => NavigationService.navigateAndReset('Dashboard'),}
      ]);
    }
  };

  return (
    <View style={Styles.container}>
      <SafeAreaView>
        <StatusBar barStyle="dark-content" backgroundColor="#eff6ff" />
        <ArrowLeftIcon width={24} height={24} />
        <Text>Login Screen</Text>
      </SafeAreaView>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eff6ff)',
  },
});