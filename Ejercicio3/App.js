import React, { useState} from 'react';
import {SafeAreaView, StyleSheet, View, Text, TextInput, Button, Alert} from 'react-native';

export default function App(){

  const [numero1, setN1] = useState(0);
  const [numero2, setN2] = useState(0);
  const [numero3, setN3] = useState(0);
  const [mayor, setMayor] = useState(0);
  const [menor, setMenor] = useState(0);
  
  const click =() =>{
  

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    const n3 = parseFloat(numero3);

    if(numero1<=0 || numero2<=0 || numero3<=0)
    {
      alert("Existen campos vacios o números negativos")
    }

    /**CAJA1--------------------------------- */
    if(n1>n2 && n1>n3 )
    {
      const MAYOR = n1;
     
      if(n2<n3 && MAYOR<50 )
      {
        const MENOR = n2-5;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
      if(n3<n2 && MAYOR<50 )
      {
        const MENOR = n3-5;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }


      if(n2<n3 && MAYOR>50 )
      {
        const MENOR = n2;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
      if(n3<n2 && MAYOR>50 )
      {
        const MENOR = n3;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
    }
    /************************************************************************* */
    
    /**CAJA 2 ------------------------------------------------------------------------- */
    if(n2>n1 && n2>n3 )
    {
      const MAYOR = n2;
     
      if(n1<n3 && MAYOR<50 )
      {
        const MENOR = n1-5;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
      if(n3<n1 && MAYOR<50 )
      {
        const MENOR = n3-5;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }


      if(n1<n3 && MAYOR>50 )
      {
        const MENOR = n1;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
      if(n3<n1 && MAYOR>50 )
      {
        const MENOR = n3;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
    } 
    /**--------------------------------------------------******************************** */



    /**CAJA 3 -**************************************************************************** */
    if(n3>n1 && n3>n2 )
    {
      const MAYOR = n3;
     
      if(n1<n2 && MAYOR<50 )
      {
        const MENOR = n1-5;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
      if(n2<n1 && MAYOR<50 )
      {
        const MENOR = n2-5;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }


      if(n1<n2 && MAYOR>50 )
      {
        const MENOR = n1;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
      if(n2<n1 && MAYOR>50 )
      {
        const MENOR = n2;
        setMenor(MENOR)
        if(MENOR>10)
        {
          const MAYORR = MAYOR+10;
          setMayor(MAYORR);
        }
        else{
          setMayor(MAYOR);
        }
      }
    }

    /****************************************************************************************** */

  }

return(
<>  

    <SafeAreaView>
    <Text style={styles.title}>Número Mayor y Menor</Text>
    </SafeAreaView>

    <View style={styles.back}>
    <Text style={styles.text}>Ingrese el Primer Número:</Text>
    <TextInput style={styles.box} placeholder='valor 1' keyboardType='numeric' onChangeText={setN1} value={numero1}/>
    
    </View>
    <View style={styles.back}>
    <Text style={styles.text}>Ingrese el Segundo Número:</Text>
    <TextInput style={styles.box} placeholder='valor 2' keyboardType='numeric' onChangeText={setN2} value={numero2}/>
    
    </View>
    <View style={styles.back}>
    <Text style={styles.text}>Ingrese el Tercer Número:</Text>
    <TextInput style={styles.box} placeholder='valor 3' keyboardType='numeric' onChangeText={setN3} value={numero3}/>
    </View>
    <View>
    <View style={styles.back}>
    <Text></Text>
      <Text style={styles.text1}>El número mayor es: {mayor} </Text>
      <Text style={styles.text2}>El número menor es: {menor} </Text>
      <Text></Text>
      <Button  title='Mostrar' onPress={click} />
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
    fontSize:30,
    textAlign:'center',
    margin:20,
    backgroundColor:'#00ab4c',
    padding:20,
    borderRadius:5,
    color:'black'
  },
  text:{
    fontSize:20,
    textAlign:'center',
    color:'black'
  },
  text1:{
    fontSize:20,
    textAlign:'center',
    color:'red'
  },
  text2:{
    fontSize:20,
    textAlign:'center',
    color:'green'
  },
  box:{
    width:"50%",
    height:40,
    borderWidth:1,
    borderColor:"#000",
    textAlign:"center",
    borderRadius:5
  },
  btn:
  {
    width:"60%",
    marginTop:30,
    backgroundColor:"#00ab4c",
  }
});