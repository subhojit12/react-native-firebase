import React,{Component} from 'react';
import {TextInput,Button,View,Alert,Text} from 'react-native';
import { db } from '../config';

let itemsRef = db.ref('/items');

addItem=(item)=>{
        
    db.ref('/items').push().set({
        itemInfo:item
    },err=>{
        consolel.log(err);
    },)
}


export default class AddItem extends  Component{
    constructor(props){
        super(props)
        this.state = {
            itemInfo:'Hello',
            items:[]
        };
        this.handleChange = this.handleChange.bind(this);
        this.clickToAdd = this.clickToAdd.bind(this);
    }

    componentDidMount(){
        itemsRef.on('value',snapshot => {
            let data = snapshot.val();
            let items = Object.values(data);
            this.setState({items:items})
        })
    }
    showError(err){
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
              {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: err.toString()},
            ],
            {cancelable: false},
          )
    }

    clickToAdd(){
        addItem(this.state.itemInfo)
    }
    
    handleChange(e){
        console.log(e.nativeEvent);
        this.setState({itemInfo:e.nativeEvent.text});
    }
    render(){
        return(
            <View>
                <TextInput
                //value={this.state.itemInfo}
                placeholder="Enter Name"
                style={{height:40,paddingLeft:6,borderWidth:1,borderColor:'black'}}
                onChange={this.handleChange}
                />
                <Text title={this.state.itemInfo} style={{color:'black'}}/>
                <Button 
                onPress={this.clickToAdd}
                title={this.state.itemInfo}
                />
                {this.state.items.map(x=>{
                    return <Text>{x.itemInfo}</Text>
                })}
            </View>
        )
    }
}