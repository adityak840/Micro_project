import React from 'react'
import{
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
} from 'react-native'

const {width,height} = Dimensions.get('screen');


const HomePage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Room')
        }}
        style={styles.button}
        >
          <Text style={styles.buttont}>
            Room 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Misc',{
            Number:2,
          });
        }}
        style={styles.button}
        >
          <Text style={styles.buttont}>
            Room 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Misc',{
            Number:3
          })
        }}
        style={styles.button}
        >
          <Text style={styles.buttont}>
            Room 3
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Misc',{
            Number:4
          })
        }}
        style={styles.button}
        >
          <Text style={styles.buttont}>
            Room 4
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
          navigation.navigate('Misc',{
            Number:5
          })
        }}
        style={styles.button}
        >
          <Text style={styles.buttont}>
            Room 5
          </Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomePage;

const styles = StyleSheet.create({
  container: {
      width,
      height,
      backgroundColor: '#1e1e1e',
      alignItems: 'center',
      flex:1,
      paddingTop:60,
  },
  button: {
    width:250,
    height:70,
    marginBottom:80,
    backgroundColor:'#bfbfbf',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:20,
  },
  buttont: {
    color:'#000000',
    fontSize:18,
  }
})