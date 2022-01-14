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
import OtpImage from '../../assets/images/otp-screen.png'
import OTPInputView from '@twotalltotems/react-native-otp-input'

function MobileVerification({navigation}) {
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.BACKGROUND}
        barStyle='dark-content' />
        <ScrollView style={styles.scroll_container}>
        <Text style={styles.verification_text}>{variableStrings['en-US'].verification}</Text>
            <Image source={OtpImage} style={styles.otp_image} />
            <Text style={styles.phoneCheck}>{variableStrings['en-US'].phoneCheck}</Text>
            <Text style={styles.otp_info}>{variableStrings['en-US'].otp_info}</Text>
            <OTPInputView
    style={styles.otp_input}
    pinCount={4}
    // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    // onCodeChanged = {code => { this.setState({code})}}
    autoFocusOnLoad
    codeInputFieldStyle={styles.underlineStyleBase}
    codeInputHighlightStyle={styles.underlineStyleHighLighted}
    onCodeFilled = {(code => {
        console.log(`Code is ${code}, you are good to go!`)
    })}
/>
            <TouchableOpacity style={styles.continue_button}>
                    <Text style={styles.continue_button_text}>{variableStrings['en-US'].continue}</Text>
                </TouchableOpacity>
        </ScrollView>
    </SafeAreaView>
    );
   }

export default MobileVerification;