import * as React from 'react';
import { Text, View, ScrollView, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';
import { Avatar, Card, Paragraph } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';


// Sorry this is a mess, but it's working :-)
// This is what you see on the first Screen
const LeftContent1 = props => <Avatar.Icon {...props} icon="cake" style={{ backgroundColor: "#442C2E" }} />
const LeftContent2 = props => <Avatar.Icon {...props} icon="beer" style={{ backgroundColor: "#442C2E" }} />
const LeftContent3 = props => <Avatar.Icon {...props} icon="food" style={{ backgroundColor: "#442C2E" }} />
const LeftContent4 = props => <Avatar.Icon {...props} icon="ice-cream" style={{ backgroundColor: "#442C2E" }} />

export default function Home({ navigation }) {
  return (

    <ScrollView>
      <Card style={styles.card}>
        <Card.Title title="Bolos" left={LeftContent1} style={styles.colorCard} />
        <Card.Content style={styles.color}>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        </Card.Content>
        <Button
          mode='contained'
          color='#ffde76'
          onPress={() => navigation.navigate('Bolos')}
        > Ver receitas</Button>

      </Card>
      <Card style={styles.card}>
        <Card.Title title="Bebidas" left={LeftContent2} style={styles.colorCard} />
        <Card.Content style={styles.color}>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        </Card.Content>
        <Button
          mode='contained'
          color='#ffde76'
          onPress={() => navigation.navigate('Bebidas')}
        > Ver receitas</Button>

      </Card>

      <Card style={styles.card}>
        <Card.Title title="Refeições" left={LeftContent3} style={styles.colorCard} />
        <Card.Content style={styles.color}>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        </Card.Content>
        <Button
          mode='contained'
          color='#ffde76'
          onPress={() => navigation.navigate('Ref')}
        > Ver receitas</Button>
        </Card>

        <Card style={styles.card}>
        <Card.Title title="Sobremesas" left={LeftContent4} style={styles.colorCard} />
        <Card.Content style={styles.color}>
          <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        </Card.Content>
        <Button
          mode='contained'
          color='#ffde76'
          onPress={() => navigation.navigate('Sobremesas')}
        > Ver receitas</Button>
        </Card>
    </ScrollView>

    /* <ScrollView style={styles.container}>
       <View>
         <Text style={styles.titulo}>Categorias</Text>
         <View><Text style={styles.subtitle}><Icon2 name={'cake'} color={'#6B0052'} size={15}></Icon2> Bolos</Text></View>
         <View>
           <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
         </View>
         <Button
           mode='outlined'
           color='#442C2E'
           onPress={() => navigation.navigate('Bolos')}
         > Ver receitas</Button>
   
         <View><Text style={styles.subtitle}><Icon name={'beer'} color={'brown'} size={16}></Icon> Bebidas</Text></View>
         <View>
           <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
         </View>
 
         <Button
           mode='outlined'
           color='#442C2E'
           onPress={() => navigation.navigate('Bebidas')}
         > Ver receitas</Button>

         <View><Text style={styles.subtitle}><Icon name={'fast-food'} color={'red'} size={16}></Icon> Refeições</Text></View>
         <View>
           <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
         </View>
 
        <Button
           mode='outlined'
           color='#442C2E'
           onPress={() => navigation.navigate('Ref')}
         > Ver receitas</Button>

         <View><Text style={styles.subtitle}><Icon name={'ice-cream'} color={'#ED30CF'} size={16}></Icon> Sobremesas</Text></View>
         <View>
           <Text style={styles.descricao}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </Text>
         </View>
 
         <Button
         style={styles.button}
           mode='outlined'
           color='#442C2E'
           onPress={() => navigation.navigate('Sobremesas')}
         > Ver receitas</Button>
 
       </View>
     </ScrollView>*/
  );
}

const styles = StyleSheet.create({
  colorCard: {
    backgroundColor: '#ffe5c3',
  },
  color:{
    backgroundColor: "#fff8e7"
  },
  card:{
    margin: 5
  },
})

