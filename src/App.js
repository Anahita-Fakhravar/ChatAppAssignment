/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import { ScreensName } from './ScreensName';
import { store } from './redux/store';

const Stack = createStackNavigator();

const stackOptions = { headerShown: false, animationEnabled: false, }

function App() {

    const [goToChatRoom, setGoToChatRoom] = useState(false)

    useEffect(() => {
        function goToChatRoom() {
            setTimeout(function () {
                setGoToChatRoom(true)
            }, 1500);
        }
        goToChatRoom()
    }, [])


    return (

        <Provider store={store}>

            <NavigationContainer>

                {goToChatRoom ? (
                    <>

                        <Stack.Navigator>
                            <Stack.Screen name="AuthScreen" component={ScreensName.AuthScreen}
                                options={stackOptions} />

                            <Stack.Screen name="ChatScreen" component={ScreensName.ChatScreen}
                                options={stackOptions} />
                        </Stack.Navigator>
                    </>
                ) : (
                    <>
                        <Stack.Navigator>
                            <Stack.Screen name="Splash"
                                component={ScreensName.SplashScreen}
                                options={{ headerShown: false }} />
                        </Stack.Navigator>
                    </>
                )}

            </NavigationContainer>

        </Provider>


    );
}

export default App;
