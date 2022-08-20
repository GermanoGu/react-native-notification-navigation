import React from 'react';
import { View, Text,ScrollView, Image, StyleSheet } from 'react-native';

let img = require('../Image/cake.jpg')

function Bolos() {
    return (
<ScrollView>
        <View style={styles.container}>
        <View>
            <Image source={img} style={styles.Imagem}></Image>
        </View>
            <Text style={styles.subtitle}>Bolo de creme de Avelã</Text>
            <Text style={styles.section}>Ingredientes:</Text>
            <Text style={styles.tarefas}>Massa:</Text>
            <Text style={styles.textContent}>- 3 ovos</Text>
            <Text style={styles.textContent}>- 2 colheres de sopa de manteiga amolecida</Text>
            <Text style={styles.textContent}>- 2 xícaras de chá de açúcar</Text>
            <Text style={styles.textContent}>- 1 xícara de chá de leite</Text>
            <Text style={styles.textContent}>- 2 xícaras chá de farinha de trigo</Text>
            <Text style={styles.textContent}>- 1 colher sopa de fermento em pó</Text>
            <Text style={styles.textContent}>- 1 colher  de café de essência de baunilha</Text>
            <Text style={styles.tarefas}>Recheio:</Text>
            <Text style={styles.textContent}>- 200 gramas de creme de Avelã</Text>
            <Text style={styles.textContent}>- 1 lata de leite condensado</Text>
            <Text style={styles.tarefas}>Modo de preparo:</Text>
            <Text style={styles.textContent}>Bata as claras em neve bem firme e reserve. Bata as gemas com a manteiga, o açúcar, o leite, a farinha, o
            fermento e a essência de baunilha. Suavemente, sem bater, incorpore as claras. Forre 2 formas redondas
            médias
            com papel manteiga e coloque metade da massa em cada uma delas. Leve para assar em forno médio pré-aquecido,
            por
            aproximadamente 20 minutos. Enquanto assa o bolo, bata o leite condensado com o creme de avelã. Retire o
            bolo do
            forno, aguarde alguns minutos para desenformar, retire o papel manteiga, coloque no prato que será servido e
            recheie com parte do creme. Cubra com o outro bolo e decore com o restante do creme.</Text>
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

export default Bolos;