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
import {COLORS} from '../../assets/colors/theme_colors';
import { variableStrings } from '../../values/strings';
import ElevatorsImage from '../../assets/images/elevator.png';
import Entypo from 'react-native-vector-icons/Entypo';
import Dollar from '../../assets/images/dollar.png';

function Elevators({navigation}) {
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.PRIMARY}
        barStyle='dark-content' />
         <View style={styles.navbar}>
            <View style={styles.amount_container}>
            <Image source={Dollar} style={styles.dollar_image} />
            <Text style={styles.welcome_text}>0</Text>
            </View>
            <Text style={styles.welcome_text}>{variableStrings['en-US'].welcome_back}</Text>
            <View style={{flex:1}}></View>
        </View>
        <ScrollView style={styles.scroll_container}>
        <Image source={ElevatorsImage} style={styles.elevators_image} />
        <Text style={styles.settings}>{variableStrings['en-US'].elevator}</Text>
        <TextInput style={styles.fields_input} placeholder={variableStrings['en-US'].imei} />
        <TouchableOpacity style={styles.add_elevators_button}>
                    <Text style={styles.add_elevators_button_text}>{variableStrings['en-US'].addElevator}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.all_elevators_button}>
                    <Text style={styles.all_elevators_button_text}>{variableStrings['en-US'].allElevators}</Text>
                </TouchableOpacity>
        <View style={{width:"100%",height:65}}></View>
        </ScrollView>
    </SafeAreaView>
    );
   }

export default Elevators;