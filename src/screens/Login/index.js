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

function Login({navigation}) {
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.BACKGROUND}
        barStyle='dark-content' />
        <ScrollView style={styles.scroll_container}>
            <Text style={styles.welcome_back}>{variableStrings['en-US'].welcome_back}</Text>
            <Text style={styles.login_info}>{variableStrings['en-US'].login_info}</Text>
            <Image source={LoginImage} style={styles.login_image} />
            <View style={styles.horizontal_centering_view}>
            <TextInput style={styles.fields_input} placeholder={variableStrings['en-US'].emailPlaceholder} />
            <TextInput style={styles.fields_input} placeholder={variableStrings['en-US'].passwordPlaceholder} />
            <Text style={styles.forgotPassword}>{variableStrings['en-US'].forgotPassword}</Text>
            <TouchableOpacity style={styles.login_button}>
                    <Text style={styles.login_button_text}>{variableStrings['en-US'].login}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.horizontalNoAccountRegisterContainer}>
            <Text style={styles.noAccount}>{variableStrings['en-US'].noAccount}</Text>
            <Text style={styles.registerNow}>{variableStrings['en-US'].signup}</Text>
        </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
   }

export default Login;