import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

let img = require('../Image/cozinhar.jpg')

function Sobre() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.subtitle}>COM TODO O CARINHO DO MUNDO!</Text>
        <View>
          <Image source={img} style={styles.Imagem}></Image>
          <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et pharetra pharetra massa massa ultricies mi.
            Convallis convallis tellus id interdum velit laoreet id.
            Augue ut lectus arcu bibendum at varius. At augue eget arcu dictum varius duis. Orci nulla pellentesque dignissim enim sit. Ipsum consequat nisl vel pretium lectus quam id.
            Purus sit amet luctus venenatis lectus magna fringilla. Quis varius quam quisque id diam. Mauris pellentesque pulvinar pellentesque habitant morbi tristique.
            Fames ac turpis egestas sed tempus urna. Suspendisse ultrices gravida dictum fusce ut. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Aliquet lectus proin nibh nisl condimentum id.
            Urna nunc id cursus metus aliquam eleifend mi in. Id diam maecenas ultricies mi. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Rhoncus mattis rhoncus urna neque viverra.
            In hac habitasse platea dictumst quisque sagittis purus sit.
            Purus sit amet volutpat consequat mauris nunc congue nisi. Cras pulvinar mattis nunc sed blandit libero volutpat sed. Nibh ipsum consequat nisl vel pretium lectus quam. Ornare lectus sit amet est placerat.
            Mattis rhoncus urna neque viverra justo nec.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subtitle: {
    color: "#442C2E",
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    borderBottomColor: '#442C2E',
    borderTopColor: '#442C2E',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    backgroundColor: '#ffe5c3'
  },
  descricao: {
    color: "#442C2E",
    textAlign: "justify",
    margin: 10
  },
  Imagem: {
    width: 500,
    height: 300,
    alignSelf: 'center'

  },
})
export default Sobre;