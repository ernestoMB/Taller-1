import React, {useDebugValue, useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, Button, Image} from 'react-native';

export default function App(){

  const [numero1, setN1] = useState(0);
  const [numero2, setN2] = useState(0);
  const [numero3, setN3] = useState(0);
  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  
  const click =() =>{
    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    const n3 = parseFloat(numero3);
    const sqrt= Math.sqrt((n2*n2)- (4*n1*n3));
    const r1 = (-(n2)+ (sqrt/(2*n1)));
    const r2 = (-(n2)- (sqrt/(2*n1)))

    setResult1(r1)
    setResult2(r2)
    if(numero1==0 || numero2==0 || numero3==0)
    {
      alert("Campos vacios, debes llenar todos los campos")
    }
    if(n3>n2)
    {
      alert("Esta ecuacion no tiene solución en los reales")
    }

  }


return(
<>  

    <SafeAreaView style={styles.Header}>
    <Text style={styles.title}>Solución para Formula Cuadrática</Text>
    </SafeAreaView>
    <View style={styles.back}><Image style={styles.img} source={require('./src/formula-cuadratica.png')}/></View>

    <View style={styles.back}>
    <Text style={styles.text}>Ingrese el Primer Número:</Text>
    <TextInput style={styles.box} placeholder='a' keyboardType='numeric' onChangeText={setN1} value={numero1}/>
    
    </View>
    <View style={styles.back}>
    <Text style={styles.text}>Ingrese el Segundo Número:</Text>
    <TextInput style={styles.box} placeholder='b' keyboardType='numeric' onChangeText={setN2} value={numero2}/>
    
    </View>
    <View style={styles.back}>
    <Text style={styles.text}>Ingrese el Tercer Número:</Text>
    <TextInput style={styles.box} placeholder='c' keyboardType='numeric' onChangeText={setN3} value={numero3}/>
    </View>
    <View>
    <View style={styles.back}>
    <Text></Text>
      <Text style={styles.text}>X1= {result1} , X2={result2} </Text>
      <Text></Text>
      <Button  title='Calcular solución' onPress={click} />
    </View>
    </View>

  </>
);
}

const styles= StyleSheet.create({

  back:{
    alignItems:"center"
  },

  title:{
    fontSize:20,
    textAlign:'center',
    
    backgroundColor:'#21b9ff',
    padding:20,
    borderRadius:5,
    color:'black'
  },
  text:{
    fontSize:20,
    textAlign:'center'
  },
  box:{
    width:"50%",
    height:40,
    borderWidth:1,
    borderColor:"#000",
    textAlign:"center",
    borderRadius:10
  },
  btn:
  {
    width:"60%",
    marginTop:30,
    backgroundColor:"#00ab4c",
  },
  img:{
    width:200,
    height:90,
    textAlign:'center'
  }

});