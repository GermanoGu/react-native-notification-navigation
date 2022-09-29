import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';

let img = require('../Image/creme.jpg')
const LeftContent = props => <Avatar.Icon {...props} icon="food" style={{ backgroundColor: "#442C2E" }} />

function Refeicao() {
    return (

        <ScrollView>
        <Card style={styles.card}>
            <Card.Cover source={img} />
            <Card.Title title="Creme de arroz" subtitle="Ingredientes:" left={LeftContent} style={styles.color} />
            <Card.Content style={styles.color}>
                <Paragraph>- 1/2 xícara de chá de arroz</Paragraph>
                <Paragraph>- 2 cenouras médias cortadas em fatias finas</Paragraph>
                <Paragraph>- 2 xícaras de chá de água</Paragraph>
                <Paragraph>- 2 ovos</Paragraph>
                <Paragraph>- 1/2 xícara de chá de leite</Paragraph>
                <Paragraph>- 50g de queijo parmesão ralado</Paragraph>
                <Paragraph>- 1 colher de sopa de manteiga</Paragraph>
                <Paragraph style={styles.tarefas}>Modo de preparo:</Paragraph>
                <Paragraph style={styles.textContent}>Em uma panela, com a medida de água já fervendo, coloque o arroz e as cenouras e cozinhe em fogo alto por
            aproximadamente 13 minutos. Escorra a água que sobrar e coloque o arroz e as cenouras cozidas no
            liquidificador.
            Bata com os ovos e o leite, até formar um purê. Em uma panela, junte a este purê o queijo e a manteiga e
            cozinhe
            para apurar.</Paragraph>
            </Card.Content>
        </Card>
    </ScrollView>
    );
}
const styles = StyleSheet.create({
    
    tarefas: {
        textAlign: 'left',
        fontSize: 14,
        color: '#442C2E',
        marginLeft: 10,
        fontWeight: 'bold',
    },
    textContent: {
        textAlign: 'justify',
        color: '#442C2E',
        margin: 10
    },
    color: {
        backgroundColor: "#fff8e7"
    },
    card:{
        margin: 5
    }

})


export default Refeicao;