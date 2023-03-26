/* 
Aluna: Fernanda Gonçalves de Lima
DSM - Desenvolvimento de Software Multiplataforma
5º semestre - turma: manhã
Professor: Jefferson de Souza Dias
Disciplinas:
    ILP039_Programacao_para_Dispositivos_Moveis_II
    ISW036_Laboratório de Desenvolvimento para Dispositivos Móveis
*/

import React from 'react';
import { Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';



const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <StatusBar backgroundColor="#AAAAAA"
          barStyle="dark-content"
        //barStyle="light-content"
        //barStyle="default"
        />
        <Image
          style={{ width: '25%', height: 50 }}
          source={require('./assets/fatec-zl-transparente.png')}
        />
        <Text>{'\n'}</Text>
        <Text> {'\n'}Visitante digite seu nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
        />
        <Text>{'\n'}</Text>
        <Text style={styles.styleTexto}>
          {'\n'}Meu primeiro app com vários componentes básicos do React Native!{'\n'}Utilizando Image, ScrollView, StatusBar, StyleSheet, Text, TextInput, View 😎.</Text>
        <Text style={styles.title}>Aluna: Fernanda Gonçalves de Lima {'\n'}5º Semestre DSM</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title0}>{'\n'}😎</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title0}>{'\n'}😎</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title0}>{'\n'}😎</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title0}>{'\n'}😎</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title0}>{'\n'}😎</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title0}>{'\n'}😎</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title0}>{'\n'}😎</Text>
        <Text >{'\n'}😎                                                                               😎</Text>        
        <Text style={styles.title}>Aluna: Fernanda Gonçalves de Lima {'\n'}5º Semestre DSM</Text>        
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: (10, 25, 25, 10),
    backgroundColor: '#eaeaea',
    borderColor: '#20232a',
    borderWidth: 20,
  },
  title0: {
    textAlign: 'center',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 12,
    backgroundColor: '#cccaca',
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
  },
  styleTexto:
  {
    color: "#B20000",
    fontSize: 18,
    textAlign: 'justify'
  }
});
export default App;
