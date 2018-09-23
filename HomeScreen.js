import React from 'react';
import { Text, View, ListView, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native';
import {SearchBar} from 'react-native-elements';
import {fdb} from './firebaseConfig';
import {Search} from './Search';


export class HomeScreen extends React.Component {

  static navigationOptions = {
    headerTitle: <Search />,
    headerStyle: {
      backgroundColor: 'rgba(21, 255, 0, 1)',
    },
  };
    
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
            _key: child.key,
            steps:JSON.stringify(child.val().steps),
          })
        });
        this.setState({
          itemDataSource : this.state.itemDataSource.cloneWithRows(items)
        })
      })

      
    }

    pressRow(item){
      // this.itemsRef = this.getRef().child('Tutorials/'+ itme);
      console.log(JSON.parse(item.steps));
      this.props.navigation.navigate('Tutorial', item);

    }

    renderRow(item){
      return(
        <TouchableHighlight onPress={() => {
          this.pressRow(item);
        }}>
          <View style={styles.box}>
            <ImageBackground style={{
              flex: 1, blurRadius:50}}
              source={{ uri: item.img }}
              >
              <View style={{flex:1, backgroundColor:'rgba(125, 26, 255, 0.22)'}}>
                <Text style={{color:'white', fontWeight: 'bold', textAlign:'center', fontSize:30, marginTop:20}}>{item.title}</Text>
              </View>
            </ImageBackground>
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
      height: 100,
      borderWidth: 3,
      borderColor: '#FFFFFF'
    }
  });