import React from 'react';
import { Text, View, ListView, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {fdb} from './firebaseConfig';

let data = {};
let key = "";


export class HomeScreen extends React.Component {

    constructor(){
      super();
      let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      this.state = {
        itemDataSource: ds
      }

      this.itemsRef = this.getRef().child('Tutorials');

      this.renderRow = this.renderRow.bind(this);
      this.pressRow = this.pressRow.bind(this);
    }

    getRef(){
      return fdb.database().ref();
    }

    componentWillMount(){
      this.getItems(this.itemsRef);
    }

    componentDidMount(){
      this.getItems(this.itemsRef);
    }

    getItems(itemsRef){
      itemsRef.on('value', (snap) => {
        let items = [];
        snap.forEach((child) => {
          items.push({
            title: child.val().name,
            img: child.val().img,
            _key: child.key
          })
        });
        this.setState({
          itemDataSource : this.state.itemDataSource.cloneWithRows(items)
        })
      })

      
    }

    pressRow(item){
      console.log(item);
    }

    renderRow(item){
      return(
        <TouchableHighlight onPress={() => {
          this.pressRow(item);
        }}>
          <View style={styles.box}>
            <ImageBackground style={{
              flex: 1}}
              source={{ uri: item.img }}
              >
              <Text>{item.title}</Text>
            </ImageBackground>
          </View>
        </TouchableHighlight>
      )
    }

    render() {
      return (
        <View style={{ flex: 1}}>
          <View >
              <SearchBar lightTheme containerStyle={{marginTop:20}} placeholder='Type Here...' />
          </View>
          <View style={styles.row}>
            <ListView
              dataSource={this.state.itemDataSource}
              renderRow = {this.renderRow}
            />
          </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    row: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
      alignItems: 'baseline'
    },
    box: {
      flex: 1,
      height: 100,
      borderWidth: 1,
      borderColor: '#7CFC00'
    }
  });