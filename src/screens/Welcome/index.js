import React from 'react';
import {
    SafeAreaView,
    View,
    StatusBar,
    ScrollView,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';
import styles from './style';
import {COLORS} from '../../assets/colors/theme_colors'
import { variableStrings } from '../../values/strings';
import WelcomeImage from '../../assets/images/welcome-screen.png'

function Welcome({navigation}) {
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.BACKGROUND}
        barStyle='dark-content' />
        <ScrollView style={styles.scroll_container}>
            <Image source={WelcomeImage} style={styles.welcome_image} />
            <View style={styles.horizontal_centering_view}>
            <Text style={styles.welcome_text}>{variableStrings['en-US'].welcome}</Text>
            <Text style={styles.welcome_info}>{variableStrings['en-US'].welcome_info}</Text>
            </View>
            <View style={styles.horizontal_button_container}>
                <TouchableOpacity style={styles.login_button} onPress={()=>navigation.navigate("Login")}>
                    <Text style={styles.login_button_text}>{variableStrings['en-US'].login}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.signup_button} onPress={()=>navigation.navigate("Auth")}>
                    <Text style={styles.signup_button_text}>{variableStrings['en-US'].signup}</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
   }

export default Welcome;