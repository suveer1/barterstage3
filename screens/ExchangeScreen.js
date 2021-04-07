import React from 'react';
import {TextInput, TouchableOpacity, View,Text,} from 'react-native';
 import db from '../config';
 import firebase from 'firebase';

export default class ExchangeScreen extends React.Component{
    constructor(){
        super();
        this.state={item:'',description:'',userid:firebase.auth().currentUser.email}
    }
    addItem=(a,b)=>{
        db.collection('exchanges').add({
            userid:this.state.userid,
            item:a,
            description:b
        })
    }
    render(){
        return(
            <View>
                <TextInput 
                placeholder="itemName"
                onChangeText={(text)=>{this.setState({item:text})}}
                style={{borderWidth:2,width:'80%',height:30,alignSelf:'center',marginTop:30}}
                />
                <TextInput 
                placeholder="description"
                onChangeText={(text)=>{this.setState({description:text})}}
                style={{borderWidth:2,width:'80%',height:200,alignSelf:'center'}}
                />                
                <TouchableOpacity style={{width:150,height:30,borderRadius:20,backgroundColor:'orange',alignSelf:'center'}}
                onPress={()=>{this.addItem(this.state.item,this.state.description)}}
                >
                    <Text style={{alignSelf:'center',fontSize:20,fontWeight:'bold'}}>add item</Text>
                </TouchableOpacity>
            </View>
        )
    }
}