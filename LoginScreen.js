import React from 'react';
import { Text, View } from 'react-native';
import {Container, Content, Header, Form, Input, Item, Button, Label} from 'native-base';
import {fdb} from './firebaseConfig';

export class LoginScreen extends React.Component {

    constructor(props){
        super(props)

        this.state = ({
            email:'',
            password:''
        })

    }

    signUpUser = (email, password) => {
        try {
            if(this.state.password.length < 6){
                alert("Please enter atleast 6 characters");
                return;
            }
            fdb.auth().createUserWithEmailAndPassword(email, password);
            
        } catch (error) {
            console.log(error.toString())
        }

    }

    loginUser = (email, password) =>{
        try {
            fdb.auth().signInWithEmailAndPassword(email,password).then(function(user){
                alert(email)
            })
        } catch (error) {
            
        }
    }

    render() {
      return (
        <Container style={{flex: 1, justifyContent: "center", padding:10}}>
            <Form>
                <Item floatingLabel>
                    <Label>Email</Label>
                    <Input
                    autoCorrect={false}
                    autoCapitalize= "none"
                    onChangeText = {(email) => this.setState({email})}
                    />

                </Item>

                <Item floatingLabel>
                    <Label>Password</Label>
                    <Input
                    secureTextEntry={true}
                    autoCorrect={false}
                    autoCapitalize= "none"
                    onChangeText = {(password) => this.setState({password})}
                    />

                </Item>

                <Button
                full
                success
                style={{marginTop:10}}
                onPress = {() => this.loginUser(this.state.email, this.state.password) }
                >
                <Text>Login</Text>
                </Button>

                <Button
                full
                primary
                style={{marginTop:10}}
                onPress = {() => this.signUpUser(this.state.email, this.state.password) }
                >
                <Text>Sign Up</Text>
                </Button>
            </Form>
        </Container>
      );
    }
  }