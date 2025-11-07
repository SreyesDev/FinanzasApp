import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, SafeAreaView, StatusBar } from 'react-native';

// Import Components
import NavigationService from '../../root/navigation/NavigationService';
import TextInputReusable from '../../../components/TextInput/TextInputReusable';

// Import Icons
import UserIcon from '../../../assets/icons/user-white-filled.svg';
import ShowPasswordIcon from '../../../assets/icons/eye-off-gray.svg';
import AppleIcon from '../../../assets/icons/brand-apple-black.svg';
import FacebookIcon from '../../../assets/icons/brand-facebook-blue.svg';
import GoogleIcon from '../../../assets/icons/brand-google.svg';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);

  // Validación y manejo del login
  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Por favor ingresa email y contraseña');
      return;
    }

    // Lógica de autenticación
    if (email && password) {
      Alert.alert('Éxito', 'Login exitoso', [
        { text: 'OK', onPress: () => NavigationService.navigateAndReset('Dashboard')},
      ]);
    }
  };

  return (
    <View style={Styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#061222" />
      <SafeAreaView style={Styles.iconContainer}>
        <UserIcon width={100} height={100} />
      </SafeAreaView>

      {/* Botones de Selección de Tipo de Usuario */}
      <View style={Styles.tabContainer}>
        <TouchableOpacity
          style={[Styles.tab, !isNewUser && Styles.tabActive]}
          onPress={() => setIsNewUser(false)}
        >
          <Text style={[Styles.tabText, !isNewUser && Styles.tabTextActive]}>
            Existing
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[Styles.tab, isNewUser && Styles.tabActive]}
          onPress={() => setIsNewUser(true)}
        >
          <Text style={[Styles.tabText, isNewUser && Styles.tabTextActive]}>
            New Users
          </Text>
        </TouchableOpacity>
      </View>
      <View style={Styles.containerBody}>
        <TextInputReusable
          value={email}
          onChangeText={setEmail}
          placeholder="Usuario"
          placeholderTextColor="#999999"
          containerInputStyle={Styles.containerInputStyle}
          inputStyle={Styles.inputStyle}
        />
        <View style={Styles.divider} />
        <TextInputReusable
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          placeholderTextColor="#999999"
          icon={<ShowPasswordIcon />}
          showIcon={true}
          isIconPressable={true}
          onIconPress={() => setShowPassword(!showPassword)}
          secureTextEntry={!showPassword}
          containerInputStyle={Styles.containerInputStyle}
          inputStyle={Styles.inputStyle}
        />
        <TouchableOpacity style={Styles.loginButton} onPress={handleLogin}>
          <Text style={Styles.loginButtonText}>
            {isNewUser ? 'Sign Up' : 'Log In'}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 20, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => Alert.alert('Recuperar Contraseña', 'Funcionalidad de recuperación de contraseña')}>
          <Text style={{ color: '#FFF', fontSize: 14, fontWeight: '500', marginTop: 10 }}>
            ¿Forget Password?
          </Text>
        </TouchableOpacity>
        <View style={{ marginTop: 10, alignItems: 'center', paddingTop: 10 }}>
          <Text style={{ color: '#FFF', fontSize: 14, fontWeight: '500'}}>---------------------OR--------------------</Text>

          {/* Contenedor horizontal para los iconos */}
          <View style={Styles.socialIconsContainer}>
            <TouchableOpacity style={Styles.iconButtonLogin} onPress={() => console.log('Login with Google')} >
              <GoogleIcon width={24} height={24} />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.iconButtonLogin} onPress={() => console.log('Login with Apple')} >
              <AppleIcon width={24} height={24} />
            </TouchableOpacity>

            <TouchableOpacity style={Styles.iconButtonLogin} onPress={() => console.log('Login with Facebook')} >
              <FacebookIcon width={24} height={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#061222',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  iconContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginHorizontal: 28,
  },
  tab: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabActive: {
    borderBottomWidth: 3,
    borderBottomColor: '#FFFFFF',
  },
  tabText: {
    fontSize: 16,
    fontWeight: '400',
    fontFamily: 'Roboto',
    color: 'rgba(255, 255, 255, 0.5)',
  },
  tabTextActive: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  containerBody: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  containerInputStyle: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  inputStyle: {
    fontSize: 15,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: '400',
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5E5',
    marginHorizontal: 16,
  },
  loginButton: {
    backgroundColor: '#123259',
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 48,
    marginTop: 6,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
  },
  socialIconsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    gap: 15,
  },
  iconButtonLogin: {
    backgroundColor: '#FFFFFF',
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  }
});