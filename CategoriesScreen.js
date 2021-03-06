import React from 'react';
import { Text, View, ListView, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {fdb} from './firebaseConfig';


export class CategoriesScreen extends React.Component {

  static navigationOptions = {
    headerTitle: 'Categories',
    headerStyle: {
      backgroundColor: 'rgba(166, 102, 255, 1)',
    },
  };
    
    constructor(){
      super();
      let ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});
      this.state = {
        itemDataSource: ds
      }

      this.itemsRef = this.getRef().child('Categories');
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
            _key: child.key,
          
          })
        });
        this.setState({
          itemDataSource : this.state.itemDataSource.cloneWithRows(items)
        })
      })

      
    }

    pressRow(item){
      // this.itemsRef = this.getRef().child('Tutorials/'+ itme);
      // console.log(JSON.parse(item.title));
      this.props.navigation.navigate('Category', item.title);

    }

    renderRow(item){
      return(
        <TouchableHighlight onPress={() => {
          this.pressRow(item);
        }}>
          <View style={styles.box}>
              <View style={{flex:1, backgroundColor:'rgba(123, 0, 224, 1)'}}>
                <Text style={{color:'white', fontWeight: 'bold', textAlign:'center', fontSize:20, marginTop:10}}>{item._key}</Text>
              </View>
          </View>
        </TouchableHighlight>
      )
    }

    render() {
      return (
        <View style={{ flex: 1}}>
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
      height: 50,
      borderWidth: 3,
      borderColor: '#FFFFFF'
    }
  });