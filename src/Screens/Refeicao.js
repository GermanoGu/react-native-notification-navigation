import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

let img = require('../Image/creme.jpg')

function Refeicao() {
    return (
<ScrollView>
        <View style={styles.container}>
        <View>
            <Image source={img} style={styles.Imagem}></Image>
        </View>
            <Text style={styles.subtitle}>Creme de arroz</Text>
            <Text style={styles.section}>Ingredientes:</Text>
            <Text style={styles.textContent}>- 1/2 xícara de chá de arroz</Text>
            <Text style={styles.textContent}>- 2 cenouras médias cortadas em fatias finas</Text>
            <Text style={styles.textContent}>- 2 xícaras de chá de água</Text>
            <Text style={styles.textContent}>- 2 ovos</Text>
            <Text style={styles.textContent}>- 1/2 xícara de chá de leite</Text>
            <Text style={styles.textContent}>- 50g de queijo parmesão ralado</Text>
            <Text style={styles.textContent}>- 1 colher de sopa de manteiga</Text>
            <Text style={styles.tarefas}>Modo de preparo:</Text>
            <Text style={styles.textContent}>Em uma panela, com a medida de água já fervendo, coloque o arroz e as cenouras e cozinhe em fogo alto por
            aproximadamente 13 minutos. Escorra a água que sobrar e coloque o arroz e as cenouras cozidas no
            liquidificador.
            Bata com os ovos e o leite, até formar um purê. Em uma panela, junte a este purê o queijo e a manteiga e
            cozinhe
            para apurar.</Text>
        </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    Imagem:{
        alignSelf:'center',
        width: 400,
        height: 200,
    },
    subtitle:{
        textAlign:'center',
        fontSize: 18,
        color: '#442C2E',
        margin:5,
        fontWeight: 'bold',
    },
    section:{
        textAlign:'left',
        fontSize: 16,
        color: '#442C2E',
        marginLeft: 20,
        fontWeight: 'bold',
    },
    tarefas:{
        textAlign:'left',
        fontSize: 14,
        color: '#442C2E',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    textContent:{
        textAlign:'left',
        color: '#442C2E',
        marginLeft: 10,
    }
    

})

export default Refeicao;