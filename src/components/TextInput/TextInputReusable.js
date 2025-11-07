import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';

/**
 * Componente TextInput reutilizable con soporte para iconos y estilos personalizables.
 *
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} [props.value=''] - Valor actual del input
 * @param {Function} [props.onChangeText=()=>{}] - Función llamada cuando el texto cambia
 * @param {string} [props.placeholder=''] - Texto placeholder del input
 * @param {string} [props.placeholderTextColor='#999999'] - Color del texto placeholder
 * @param {Object} [props.containerInputStyle={}] - Estilos para el contenedor exterior
 * @param {Object} [props.inputStyle={}] - Estilos para el input
 * @param {React.ReactElement} [props.icon] - Componente de icono a mostrar
 * @param {boolean} [props.showIcon=false] - Determina si se muestra el icono
 * @param {Function} [props.onIconPress=()=>{}] - Función llamada al presionar el icono
 * @param {boolean} [props.isIconPressable=false] - Determina si el icono es presionable
 * @returns {JSX.Element} El componente TextInput renderizado
 */
const TextInputReusable = ({
  value = '',
  onChangeText = () => {},
  placeholder = '',
  placeholderTextColor = '#999999',
  containerInputStyle = {},
  inputStyle = {},
  icon,
  showIcon = false,
  onIconPress = () => {},
  isIconPressable = false,
  ...props
}) => {
  return (
    <View style={[{ flexDirection: 'row', alignItems: 'center' }, containerInputStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[{ flex: 1 }, inputStyle]}
        {...props}
      />
      {showIcon && icon && (
        <TouchableOpacity
          style={{ marginLeft: 10, justifyContent: 'center' }}
          onPress={isIconPressable ? onIconPress : null}
          disabled={!isIconPressable}
        >
          {icon}
        </TouchableOpacity>
      )}
    </View>
  );
};

export default TextInputReusable;
