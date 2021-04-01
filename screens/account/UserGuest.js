import React from 'react'
import { StyleSheet, Text, View ,ScrollView ,Image, } from 'react-native'
import {Button} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native'

export default function UserGuest() {
    const navigation = useNavigation()
    return (
        <ScrollView
            centerContent
            style={styles.viewBody}

        >
            <Image 
                source={require("../../assets/restaurant-logo.png")}
                resizeMode="contain"
                style={styles.image}
            />
            <Text style={styles.title}>Consulta tu Perfil en Restaurants</Text>
            <Text style={styles.description}>Como describirias tu mejor restaurante ? busca y visualisa los mejores restaurantes de una forma sencilla</Text>
            <Button
                buttonStyle={styles.button}
                title="ver tu perfil"
                onPress={()=>navigation.navigate("login")}
            />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    viewBody:{
        marginHorizontal:30
    },
    image:{
        height:300,
        width:"100%",
        marginBottom: 10,
        

    },
    title:{
        fontWeight:"bold",
        fontSize:19,
        marginVertical:10,
        textAlign:"center"
    },
    description:{
        textAlign:"justify",
        marginBottom:20,
        color:"#a65273"

    },
    button:{
        backgroundColor:"#442484"
    }
})
