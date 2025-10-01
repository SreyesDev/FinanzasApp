
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/**
 * El componente StepProgress muestra un indicador de progreso de múltiples pasos con estilos personalizables.
 *
 * @component
 * @param {Object} props - Propiedades del componente.
 * @param {number} [props.currentStep=1] - El paso actual activo (índice basado en 1).
 * @param {number} [props.totalSteps=2] - El número total de pasos en la barra de progreso.
 * @param {string} [props.stepLabel='Paso'] - La etiqueta que se muestra antes del contador de pasos.
 * @param {string} [props.title='Información básica'] - El título que se muestra debajo de la etiqueta del paso.
 * @param {string} [props.backgroundColor='#1a2332'] - El color de fondo del componente.
 * @param {string} [props.activeColor='#ffffff'] - El color de los pasos activos en la barra de progreso.
 * @param {string} [props.inactiveColor='#4a5568'] - El color de los pasos inactivos en la barra de progreso.
 * @param {string} [props.textColor='#ffffff'] - El color de las etiquetas de texto.
 * @returns {JSX.Element} El componente StepProgress renderizado.
 */
const StepProgress = ({
  currentStep = 1,
  totalSteps = 2,
  stepLabel = 'Paso',
  title = 'Información básica',
  backgroundColor = '#1a2332',
  activeColor = '#ffffff',
  inactiveColor = '#4a5568',
  textColor = '#ffffff'
}) => {
  return (
    <View style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <Text style={[styles.stepText, { color: textColor }]}>
          {stepLabel} {currentStep} de {totalSteps}
        </Text>
        <Text style={[styles.title, { color: textColor }]}>
          {title}
        </Text>
      </View>

      <View style={styles.progressContainer}>
        {[...Array(totalSteps)].map((_, index) => (
          <View
            key={index}
            style={[
              styles.progressBar,
              {
                backgroundColor: index < currentStep ? activeColor : inactiveColor,
                marginRight: index < totalSteps - 1 ? 8 : 0
              }
            ]}
          />
        ))}
      </View>
    </View>
  );
};

export default StepProgress;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 28,
    paddingVertical: 20,
    paddingTop: 40,
  },
  content: {
    marginBottom: 16,
  },
  stepText: {
    fontSize: 16,
    fontWeight: '400',
    marginBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressBar: {
    flex: 1,
    height: 4,
    borderRadius: 2,
  },
});

{/* 
  <View style={{ flex: 1 }}>
    <StepProgress
      currentStep={1}
      totalSteps={2}
      stepLabel="Paso"
      title="Información básica"
    />

    <View style={{ marginTop: 20 }}>
      <StepProgress
        currentStep={2}
        totalSteps={2}
        stepLabel="Paso"
        title="Confirmación"
      />
    </View>

    <View style={{ marginTop: 20 }}>
      <StepProgress
        currentStep={2}
        totalSteps={4}
        stepLabel="Step"
        title="Personal Information"
        backgroundColor="#2d3748"
        activeColor="#48bb78"
        inactiveColor="#2d3748"
        textColor="#e2e8f0"
      />
    </View>

    <View style={{ marginTop: 20 }}>
      <StepProgress
        currentStep={3}
        totalSteps={5}
        stepLabel="Etapa"
        title="Datos de contacto"
        backgroundColor="#1e3a5f"
        activeColor="#fbbf24"
        inactiveColor="#334155"
      />
    </View>
  </View> 
*/}