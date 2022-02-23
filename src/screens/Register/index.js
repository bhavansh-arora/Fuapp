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
import SignupImage from '../../assets/images/signup-screen.png'
import { useNavigation } from '@react-navigation/native';

function Register(props) {
    const navigation = useNavigation(); 
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.BACKGROUND}
        barStyle='dark-content' />
        <ScrollView style={styles.scroll_container}>
            <Text style={styles.signup}>{variableStrings['en-US'].signup}</Text>
            <Text style={styles.signup_info}>{variableStrings['en-US'].signup_info}</Text>
            <Image source={SignupImage} style={styles.signup_image} />
            <View style={styles.horizontal_centering_view}>
            <TextInput style={styles.fields_input} placeholder={variableStrings['en-US'].emailPlaceholder} />
            <TextInput style={styles.fields_input} placeholder={variableStrings['en-US'].passwordPlaceholder} />
            <TextInput style={styles.fields_input} placeholder={variableStrings['en-US'].confirmPasswordPlaceholder} />
            <TouchableOpacity style={styles.signup_button} onPress={() => props.emailVerification()}>
                    <Text style={styles.signup_button_text}>{variableStrings['en-US'].signup}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.horizontalNoAccountRegisterContainer} onPress={()=>navigation.navigate("Login")}>
            <Text style={styles.accountPresent}>{variableStrings['en-US'].accountPresent}</Text>
            <Text style={styles.loginNow}>{variableStrings['en-US'].login}</Text>
        </TouchableOpacity>
            </View>
        </ScrollView>
    </SafeAreaView>
    );
   }

export default Register;