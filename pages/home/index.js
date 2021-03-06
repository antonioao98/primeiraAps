import React, {Component} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import Item from '../../src/components/Item';
import Footer from '../../src/components/Footer'
//import Header from '../../src/components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [
        { id: '1', nome: 'Arroz', valor: 20, qtde: 12, marca: 'Vasconcelos', referencia: '001', desconto: 10, promocao: 'Leve 5 pague 4'},
        { id: '2', nome: 'Feijão', valor: 10, qtde: 15, marca: 'Vasconcelos', referencia: '002', desconto: 5, promocao: 'Leve 6 pague 5'},
        { id: '3', nome: 'Detergente', valor: 1.99, qtde: 100, marca: 'Ypê', referencia: '405', desconto: 20, promocao: 'Leve 10 pague 9'},
        { id: '4', nome: 'Arroz', valor: 20, qtde: 12, marca: 'Vasconcelos', referencia: '001', desconto: 10, promocao: 'Leve 5 pague 4'},
        { id: '5', nome: 'Arroz', valor: 20, qtde: 12, marca: 'Vasconcelos', referencia: '001', desconto: 10, promocao: 'Leve 5 pague 4'},
        { id: '6', nome: 'Arroz', valor: 20, qtde: 12, marca: 'Vasconcelos', referencia: '001', desconto: 10, promocao: 'Leve 5 pague 4'},
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Lista de Produtos</Text>
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item}) => (
            <Item
              nome={item.nome}
              valor={item.valor}
              qtde={item.qtde}
              marca={item.marca}
              referencia={item.referencia}
              desconto={item.desconto}
              promocao={item.promocao}
            />
          )}
        />
        <Footer/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#1DA1F2',
    margin: 20,
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default App;