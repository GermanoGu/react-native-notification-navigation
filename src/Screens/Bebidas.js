import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';

let img = require('../Image/abacaxi.jpg')
const LeftContent = props => <Avatar.Icon {...props} icon="beer" style={{ backgroundColor: "#442C2E" }} />

function Bebidas() {
    return (
        <ScrollView>
            <Card style={styles.card}>
                <Card.Cover source={img} />
                <Card.Title title="Batida alcoólica de abacaxi" subtitle="Ingredientes:" left={LeftContent} style={styles.color} />
                <Card.Content style={styles.color}>
                    <Paragraph>- 100ml de Cachaça, Vodka, Gyn ou Saquê</Paragraph>
                    <Paragraph>- 100ml de Leite</Paragraph>
                    <Paragraph>- 1/2 lata de leite condensado</Paragraph>
                    <Paragraph>- 5 rodelas de limão</Paragraph>
                    <Paragraph>- 3 rodelas grossas de abacaxi</Paragraph>
                    <Paragraph>- Gelo</Paragraph>
                    <Paragraph style={styles.tarefas}>Modo de preparo:</Paragraph>
                    <Paragraph style={styles.textContent}>Bata o leite condensado, o Leite e o abacaxi com 100ml de Cachaça, Vodka, Gyn ou Saquê em um
                        liquidificador. Em
                        um copo de 500ml adicione o gelo e as rodelas de limão, adicione a batida do liquidificador no copo e
                        desfrute.
                        Pode-se bater no liquidificador junto aos outros ingredientes balas de menta/hortelã extraforte para
                        dar uma
                        leve refrescância.</Paragraph>
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

export default Bebidas;