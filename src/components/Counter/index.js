import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Counter({title, number}) {
  return (
    <View>
        <Text style={styles.nb}>{number}</Text>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    nb: {
        fontWeight: 'bold',
        fontSize: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'grey'
    }
})
