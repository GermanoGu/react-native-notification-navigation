import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';

let img = require('../Image/brigadeiro.jpg')

function Sobremesas() {
    return (
<ScrollView>
        <View style={styles.container}>
        <View>
            <Image source={img} style={styles.Imagem}></Image>
        </View>
            <Text style={styles.subtitle}>Brigadeiro com flocos de arroz</Text>
            <Text style={styles.section}>Ingredientes:</Text>
            <Text style={styles.textContent}>- 1 colher de sopa de manteiga sem sal</Text>
            <Text style={styles.textContent}>- 2 colheres de sopa de chocolate em pó</Text>
            <Text style={styles.textContent}>- 1 lata de leite condensado</Text>
            <Text style={styles.textContent}>- 1 xícara de chá de flocos de arroz</Text>
            <Text style={styles.tarefas}>Modo de preparo:</Text>
            <Text style={styles.textContent}>Em uma panela, derreta a manteiga e dissolva o chocolate em pó. Acrescente o leite condensado, misture bem e
            cozinhe mexendo em fogo baixo até aparecer o fundo da panela. Esfrie um pouco, acrescente os flocos de arroz
            e coloque em pequenos recipientes para servir.</Text>
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

export default Sobremesas;