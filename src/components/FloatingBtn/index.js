import React from 'react'
import { StyleSheet, Pressable, Text } from 'react-native';

export default function FloatingBtn({isFormVisible, toggle}) {
  return (
    <Pressable style={styles.btn} onPress={toggle}>
        <Text style={styles.txt}>{isFormVisible ? 'x' : '+'}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    btn: {
        position: 'absolute',
        right: 20,
        bottom: 20,
        backgroundColor: 'orange',
        borderRadius: 40,
        height: 40,
        width: 40,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});