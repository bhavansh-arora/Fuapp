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
import SettingsImage from '../../assets/images/settings.png';
import Entypo from 'react-native-vector-icons/Entypo';
import Dollar from '../../assets/images/dollar.png';


function Settings({navigation}) {
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
        <Image source={SettingsImage} style={styles.settings_image} />
        <Text style={styles.settings}>{variableStrings['en-US'].settings}</Text>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].updateProfile}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].about}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].privacyPolicy}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].termsOfService}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].contact}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].metamaskConnect}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].logout}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <View style={{width:"100%",height:65}}></View>
        </ScrollView>
    </SafeAreaView>
    );
   }

export default Settings;