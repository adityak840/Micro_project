import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'

const {width,height} = Dimensions.get('screen');

const Room = () => {
    return(
        <View style={styles.container}>
            <Text >
                This room be noisy
            </Text>
        </View>
    )
}

export default Room

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: '#000000',
    }
})