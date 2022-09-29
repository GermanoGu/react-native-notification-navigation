import React from 'react';
import {ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';

let img = require('../Image/cake.jpg')
const LeftContent = props => <Avatar.Icon {...props} icon="cake" style={{ backgroundColor: "#442C2E" }} />

function Bolos() {
    return (

<ScrollView>
            <Card style={styles.card}>
                <Card.Cover source={img} />
                <Card.Title title="Bolo de creme de Avelã" subtitle="Ingredientes:" left={LeftContent} style={styles.color} />
                <Card.Content style={styles.color}>
                    <Paragraph style={styles.tarefas}>Massa:</Paragraph>
                    <Paragraph>- 3 ovos</Paragraph>
                    <Paragraph>- 2 colheres de sopa de manteiga amolecida</Paragraph>
                    <Paragraph>- 2 xícaras de chá de açúcar</Paragraph>
                    <Paragraph>- 1 xícara de chá de leite</Paragraph>
                    <Paragraph>- 1 colher sopa de fermento em pó</Paragraph>
                    <Paragraph>- 1 colher  de café de essência de baunilha</Paragraph>
                    <Paragraph style={styles.tarefas}>Recheio:</Paragraph>
                    <Paragraph>- 200 gramas de creme de Avelã</Paragraph>
                    <Paragraph>- 1 lata de leite condensado</Paragraph>
                    <Paragraph style={styles.tarefas}>Modo de preparo:</Paragraph>
                    <Paragraph style={styles.textContent}>Bata as claras em neve bem firme e reserve. Bata as gemas com a manteiga, o açúcar, o leite, a farinha, o
            fermento e a essência de baunilha. Suavemente, sem bater, incorpore as claras. Forre 2 formas redondas
            médias
            com papel manteiga e coloque metade da massa em cada uma delas. Leve para assar em forno médio pré-aquecido,
            por
            aproximadamente 20 minutos. Enquanto assa o bolo, bata o leite condensado com o creme de avelã. Retire o
            bolo do
            forno, aguarde alguns minutos para desenformar, retire o papel manteiga, coloque no prato que será servido e
            recheie com parte do creme. Cubra com o outro bolo e decore com o restante do creme.</Paragraph>
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

export default Bolos;