import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Avatar, Card, Paragraph } from 'react-native-paper';

let img = require('../Image/brigadeiro.jpg')
const LeftContent = props => <Avatar.Icon {...props} icon="cupcake" style={{ backgroundColor: "#442C2E" }} />

function Sobremesas() {
    return (

<ScrollView>
            <Card style={styles.card}>
                <Card.Cover source={img} />
                <Card.Title title="Brigadeiro com flocos de arroz" subtitle="Ingredientes:" left={LeftContent} style={styles.color} />
                <Card.Content style={styles.color}>
                    <Paragraph>- 1 colher de sopa de manteiga sem sal</Paragraph>
                    <Paragraph>- 2 colheres de sopa de chocolate em pó</Paragraph>
                    <Paragraph>- 1 lata de leite condensado</Paragraph>
                    <Paragraph>- 1 xícara de chá de flocos de arroz</Paragraph>
                    <Paragraph style={styles.tarefas}>Modo de preparo:</Paragraph>
                    <Paragraph style={styles.textContent}>Em uma panela, derreta a manteiga e dissolva o chocolate em pó. Acrescente o leite condensado, misture bem e
            cozinhe mexendo em fogo baixo até aparecer o fundo da panela. Esfrie um pouco, acrescente os flocos de arroz
            e coloque em pequenos recipientes para servir.</Paragraph>
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

export default Sobremesas;