import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

let img = require('../Image/abacaxi.jpg')

function Bebidas() {
    return (
<ScrollView>
        <View style={styles.container}>
        <View>
            <Image source={img} style={styles.Imagem}></Image>
        </View>
            <Text style={styles.subtitle}>Batida alcoólica de abacaxi</Text>
            <Text style={styles.section}>Ingredientes:</Text>
            <Text style={styles.textContent}>- 100ml de Cachaça, Vodka, Gyn ou Saquê</Text>
            <Text style={styles.textContent}>- 100ml de Leite</Text>
            <Text style={styles.textContent}>- 1/2 lata de leite condensado</Text>
            <Text style={styles.textContent}>- 5 rodelas de limão</Text>
            <Text style={styles.textContent}>- 3 rodelas grossas de abacaxi</Text>
            <Text style={styles.textContent}>- Gelo</Text>
            <Text style={styles.tarefas}>Modo de preparo:</Text>
            <Text style={styles.textContent}>Bata o leite condensado, o Leite e o abacaxi com 100ml de Cachaça, Vodka, Gyn ou Saquê em um
            liquidificador. Em
            um copo de 500ml adicione o gelo e as rodelas de limão, adicione a batida do liquidificador no copo e
            desfrute.
            Pode-se bater no liquidificador junto aos outros ingredientes balas de menta/hortelã extraforte para
            dar uma
            leve refrescância.</Text>
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

export default Bebidas;