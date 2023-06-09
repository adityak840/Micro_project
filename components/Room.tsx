import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Dimensions } from 'react-native'

const {width,height} = Dimensions.get('screen');

const Room = ({navigation}) => {
    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
      }
    const random = getRandomInt(2);
    return(
        <View style={styles.container}>
            <View style={styles.room}>
                <Text style={styles.roomText}>
                    Room 1
                </Text>
            </View>
            {
                random ?
                <View style={styles.condition}>
                    <Text style={styles.conditionn}>The room is Noisy</Text>
                </View> 
                :
                <View style={styles.condition}>
                    <Text style={styles.conditionq}>The room is Quiet</Text>
                </View>
            }
            <TouchableOpacity onPress={()=>{
                navigation.goBack()
            }}>
                <Text style={styles.button}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Room

const styles = StyleSheet.create({
    container: {
        width,
        height,
        backgroundColor: '#1e1e1e',
        alignItems: 'center',
        flex:1,
    },
    room:{
        flex:0.13,
        backgroundColor: '#3f3f3f',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFFFFF',
        width:'100%'
        
    },
    roomText:{
        color:'#ffffff',
        fontSize:26,
    },
    condition:{
        flex:0.7,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:200,
    },
    conditionn:{
        color:'#99dd99',
        fontSize:32,
    },
    conditionq:{
        color:'#ff5050',
        fontSize:32,
    },
    button:{
        fontSize:18,
        backgroundColor:'#fff2f2',
        color:'#000000',
        height:40,
        width:100,
        borderRadius:8,
        paddingLeft:30,
        paddingTop:6,
        
    }
})