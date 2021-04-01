import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import RestaurantsStack from './RestaurantsStack';
import FavouriteStack from './FavouriteStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';
import { Icon } from 'react-native-elements';


const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route, color)=>{
        let iconName
        switch (route.name) {
            case "restaurants":
                iconName="compass-outline"
                break;
            case "favourites":
                iconName="heart-outline"
                break;
            case "TopRestaurants":
                iconName="star-outline"
                break;
            case "Search":
                iconName="magnify"
                break;
            case "account":
                iconName="home-outline"
                break;
        
            
        }
        return (
            <Icon
                type="material-community"
                name={iconName}
                size={22}
                color={color}

            />
        )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="restaurants"
                tabBarOptions={{
                    
                    inactiveTintColor:"#17dc34",
                    activeTintColor:"#442484"
                }}
                screenOptions={({route})=>({
                    tabBarIcon:({ color }) => screenOptions(route,color)
                })}
            >

                <Tab.Screen
                    name="restaurants"
                    component={RestaurantsStack}
                    options={{ title:"Restaurants"}}
                />
                <Tab.Screen
                    name="favourites"
                    component={FavouriteStack}
                    options={{ title:"Favourites"}}
                />
                <Tab.Screen
                    name="TopRestaurants"
                    component={TopRestaurantsStack}
                    options={{ title:"TopRestaurants"}}
                />
                <Tab.Screen
                    name="Search"
                    component={SearchStack}
                    options={{ title:"Search"}}
                />
                <Tab.Screen
                    name="account"
                    component={AccountStack}
                    options={{ title:"Account"}}
                />
                    

                
            </Tab.Navigator>
        </NavigationContainer>
    )
}
