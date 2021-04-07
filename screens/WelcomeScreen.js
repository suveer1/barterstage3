import React from 'react';
import {Text,TouchableOpacity,TextInput,StyleSheet,View,Image, Alert, Modal, ScrollView, KeyboardAvoidingView} from 'react-native';
import db from '../config';
import firebase from 'firebase';


export default class Welcomescreen extends React.Component{
    constructor(){
        super();
        this.state={emailid: '',password:'',confirmpassword:'',firstname:'',lastname:'',contact:'',address:'',ismodalvisible:false}
    }
    signup=(emailid,password,confirmpassword)=>{
        if(password != confirmpassword){
            return Alert.alert('please check your password');

        }
        else{
        firebase.auth().createUserWithEmailAndPassword(emailid,password)
        .then(()=>{
            db.collection('users').add({
                firstname : this.state.firstname,
                lastname:this.state.lastname,
                phoneno : this.state.contact,
                emailid:this.state.emailid,
                address : this.state.address,
            })
            
           return Alert.alert(
               "signUpped succsefuly" ,
           '',
           [{text :'ok', onPress : ()=>{this.setState({ismodalvisible:false})}}]
           );
        })
        .catch(function(error){
            var errorcode = error.code;
            var errormessage= error.message;
           return Alert.alert(errormessage);
        })
    }
    }
    userLogin = (emailId, password)=>{
firebase.auth().signInWithEmailAndPassword(emailId,password)
.then(()=>{
    this.props.navigation.navigate('HomeScreen')
})
.catch((error)=>{
    var errorcode = error.code;
    var errormessage= error.message;
   return Alert.alert(errormessage);
})
      }
    showmodal=()=>{
        return(
        <Modal 
        animationType="fade"
        visible={this.state.ismodalvisible}
        transparent={true}
        >
            <View style={{  flex:1,
                    borderRadius:20,
                    justifyContent:'center',
                    alignItems:'center',
                    backgroundColor:"#ffff",
                    marginRight:30,
                    marginLeft : 30,
                    marginTop:80,
                    marginBottom:80,}}>
                <ScrollView style={{width:'100%'}}>
                    <KeyboardAvoidingView>
               <TextInput 
               
                placeholder='first_name'
                onChangeText={(text)=>{this.setState({firstname:text})}}
                style={{width:280,height:30,borderWidth:2,alignSelf:'center'}}
                />
                <TextInput 
                 
                 placeholder="last_name"
                 onChangeText={(text)=>{this.setState({lastname:text})}}
                 style={{width:280,height:30,borderWidth:2,marginTop:30,alignSelf:'center'}}
                />

                <TextInput 
                 
                 placeholder="contact"
                 onChangeText={(text)=>{this.setState({contact:text})}}
                 style={{width:280,height:30,borderWidth:2,marginTop:30,alignSelf:'center'}}
                />                            
               <TextInput 
                
                placeholder='address'
                onChangeText={(text)=>{this.setState({address:text})}}
                style={{width:280,height:30,borderWidth:2,alignSelf:'center',marginTop:30}}
                />
                 <TextInput 
                keyboardType='email-address'
                placeholder='abc@gmail.com'
                onChangeText={(text)=>{this.setState({emailid:text})}}
                style={{width:280,height:30,borderWidth:2,alignSelf:'center',marginTop:30}}
                />
                <TextInput 
                 secureTextEntry={true}
                 placeholder="password"
                 onChangeText={(text)=>{this.setState({password:text})}}
                 style={{width:280,height:30,borderWidth:2,marginTop:30,alignSelf:'center'}}
                />
                 <TextInput 
                 secureTextEntry={true}
                 placeholder="confirm_password"
                 onChangeText={(text)=>{this.setState({confirmpassword:text})}}
                 style={{width:280,height:30,borderWidth:2,marginTop:30,alignSelf:'center'}}
                />
                <TouchableOpacity style={{alignContent:'center',marginTop:16,alignSelf:'center',width:200,height:40,borderWidth:2,backgroundColor:'pink',borderRadius:20}}
                onPress={()=>{this.signup(this.state.emailid,this.state.password,this.state.confirmpassword)}}
                >
                    <Text style={{fontWeight:'bold',fontSize:17,alignSelf:'center'}}>register</Text>
                </TouchableOpacity>
               
                <TouchableOpacity style={{alignContent:'center',marginTop:16,alignSelf:'center',width:200,height:40,borderWidth:2,borderRadius:20}}
                onPress={()=>this.setState({ismodalvisible:false})}
                >
                    <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center'}}>cancel</Text>
                </TouchableOpacity>                
                </KeyboardAvoidingView>
                </ScrollView>
                </View>
        </Modal>
        )
    }
    render(){
        return(
            <View style={{backgroundColor:'skyblue',width:'100%',height:'100%'}}>
                <View style={{alignContent:'center',alignSelf:'center'}}>
                    {this.showmodal()}

                </View>
                <Image 
                source={{uri : 'https://image.slidesharecdn.com/bartersystemonline-170511105432/95/barter-system-online-1-638.jpg?cb=1494500443'}}
                style={{width:300,height:200,borderRadius:20,borderWidth:3,marginLeft:50,marginTop:50}}
                />
                
                <Text style={{fontSize:24 ,fontWeight:'bold',fontFamily:'Brush Script MT',alignSelf:'center',marginBottom:20}}>Barter App</Text>
                <TextInput 
                keyboardType='email-address'
                placeholder='abc@gmail.com'
                onChangeText={(text)=>{this.setState({emailid:text})}}
                style={{width:280,height:30,borderWidth:2,alignSelf:'center'}}
                />
                <TextInput 
                    secureTextEntry={true}
                    placeholder="password"
                    onChangeText={(text)=>{this.setState({password:text})}}
                    style={{width:280,height:30,borderWidth:2,marginTop:30,alignSelf:'center'}}
                />
                <TouchableOpacity style={{alignContent:'center',marginTop:16,alignSelf:'center',width:200,height:40,borderWidth:2,backgroundColor:'pink',borderRadius:20}}
                onPress={()=>this.setState({ismodalvisible:true})}
                >
                    <Text style={{fontWeight:'bold',fontSize:17,alignSelf:'center'}}>signup</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{alignContent:'center',marginTop:16,alignSelf:'center',backgroundColor:'pink',width:200,height:40,borderWidth:2,borderRadius:20}}>
                    <Text style={{fontWeight:'bold',fontSize:17,alignSelf:'center'}}
                    onPress={()=>{this.userLogin(this.state.emailid,this.state.password)}}
                    >signin</Text>
                </TouchableOpacity>
   
            </View>
        )
    }
}