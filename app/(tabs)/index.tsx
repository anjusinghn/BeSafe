import React from 'react';
import { View, StyleSheet } from 'react-native';
import SafetyModule from '@/components/SafetyModule'; // Import the new SafetyModule component
import { StatusBar } from 'react-native';

const YourComponent = () => {
  return (
    <View style={styles.container}>
      {/* Other components can be added here */}

      {/* Full-screen SafetyModule */}
      <View style={styles.safetyModuleContainer}>
        <SafetyModule />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16, // Optional: add some padding around the main container
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  safetyModuleContainer: {
    flex: 1, // Ensure it takes the full height available
    marginTop: 20, // Optional: add some spacing above the SafetyModule
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

export default YourComponent; // Make sure to export your component
