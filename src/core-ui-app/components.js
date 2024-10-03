// MyNewComponent.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import cds from './cds-tokens.js';

const MyNewComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleGiant}>Título Gigante</Text>
      <Text style={styles.paragraphMd}>Este es un texto de ejemplo utilizando los nuevos estilos.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: cds.al.space.md,
    backgroundColor: cds.sp.color.background.subtle.value,
    borderRadius: cds.al.border.radius.md,
  },
  titleGiant: {
    ...cds.sp.text.title.giant.value,
    color: cds.sp.color.text.extreme.value,
  },
  paragraphMedium: {
    fontSize: cds.al.font.size.md,
    color: cds.sp.color.text.medium.value,
  },
});

export default MyNewComponent;