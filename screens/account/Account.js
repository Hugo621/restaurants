 import React ,{useState, useEffect}from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {  isUserLogged } from '../../utils/actions';

import Loading from '../../components/Loading'

import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

export default function Account() {
    const [login, setLogin] = useState(null)
    
    
    useEffect(() => {
        setLogin(isUserLogged())
    }, [])

    if(login == null){
        return <Loading isVisible={true} text="Cargando..."/>
    }


    return login ? <UserLogged/> :<UserGuest/>
}

const styles = StyleSheet.create({})
 



/* 
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { firebaseApp } from '../../utils/firebase';
import   firebase from 'firebase';



import UserGuest from './UserGuest';
import UserLogged from './UserLogged';

const Account = () => {
    const [login, setLogin] = useState(null);

    useEffect(() => {
        firebase.auth().onAuthStateChanged( (user) => {
            user !== null ? (setLogin(true)) : setLogin(false)
        });
       
    }, []);

    if(login == null) {  
        return <Text>Cargando</Text>
    }
    return login ? <UserLogged/> : <UserGuest/>
}

export default Account

const styles = StyleSheet.create({}) */