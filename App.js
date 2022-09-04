import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View, TextInput, FlatList } from 'react-native';


export default function App() {
  
  const [firstNumber, setFirstNumber] = useState('');

  const [secondNumber, setSecondNumber] = useState('');

  const [result, setResult] =useState('');

  const [data, setData] = useState([]);

  const addToList = () =>{
    setData([...data, {key: calculation}]);
  }

  const addNumbers = () => { 
     setResult(firstNumber+secondNumber)
     let calc = (firstNumber + "+" + secondNumber + "=" + (firstNumber+secondNumber))
     setData([...data, {key: calc }]);
  }

  const substractNumbers = () => { 
    setResult(firstNumber-secondNumber)
    let calc = (firstNumber + "-" + secondNumber + "=" + (firstNumber-secondNumber))
    setData([...data, {key: calc }]);
 }

  return (
    <View style={styles.container}>

      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Text>Simple Calculator!!!</Text>
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={firstNumber=>setFirstNumber(parseInt(firstNumber))} value={firstNumber}/>
        <TextInput style={styles.input} keyboardType='number-pad' onChangeText={secondNumber=>setSecondNumber(parseInt(secondNumber))} value={secondNumber}/>
        <Text>Result: {result}</Text>
      </View>

      <View style={{position: 'relative', top:30}}>
      <View style={{flex:1, flexDirection: 'row', alignItems:'center', justifyContent:'space-around', marginTop:'-50%'}}>
      <Button onPress={substractNumbers} title='-'/>
      <Button onPress={addNumbers} title='+'/>
      </View>
      </View>

      <View style={{flex:1, flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <Text>History</Text>
        <FlatList
        data={data}
        renderItem={({item}) =><Text>{item.key}</Text>}  
        keyExtractor={(item, index) => index.toString()}
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  input:{
    width:200,
    borderColor:'gray',
    borderWidth:1
  }
});




