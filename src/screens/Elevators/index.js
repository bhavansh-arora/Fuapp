import React from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    ScrollView,
    Image,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styles from './style';
import {COLORS} from '../../assets/colors/theme_colors'
import { variableStrings } from '../../values/strings';
import LoginImage from '../../assets/images/login-screen.png'

function Elevators({navigation}) {
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.BACKGROUND}
        barStyle='dark-content' />
        <ScrollView style={styles.scroll_container}>
            
        </ScrollView>
    </SafeAreaView>
    );
   }

export default Elevators;