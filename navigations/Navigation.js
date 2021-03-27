import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import Favourites from '../screens/Favourites'
import TopRestaurants from '../screens/TopRestaurants';
import Search from '../screens/Search'
import Account from '../screens/Account'
import RestaurantsStack from './RestaurantsStack';
import FavouriteStack from './FavouriteStack';
import TopRestaurantsStack from './TopRestaurantsStack';
import SearchStack from './SearchStack';
import AccountStack from './AccountStack';

const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
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