import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, SafeAreaView, StatusBar } from 'react-native';

// Import Components
import NavigationService from '../../root/navigation/NavigationService';
import TextInputReusable from '../../../components/TextInput/TextInputReusable';
import Styles from '../styles/LoginScreenStyle';

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
      NavigationService.navigate('Dashboard');
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