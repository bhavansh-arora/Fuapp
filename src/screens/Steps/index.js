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
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import Dollar from '../../assets/images/dollar.png';

function Steps({navigation}) {
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.PRIMARY}
        barStyle='light-content' />
        <View style={styles.navbar}>
            <View style={styles.amount_container}>
            <Image source={Dollar} style={styles.dollar_image} />
            <Text style={styles.welcome_text}>0</Text>
            </View>
            <Text style={styles.welcome_text}>{variableStrings['en-US'].welcome_back}</Text>
            <View style={{flex:1}}></View>
        </View>
        <View style={styles.container}>
        <CountdownCircleTimer
        trailColor={COLORS.TRAIL}
    isPlaying
    duration={60}
    colors={['#256901', '#F7B801', '#A30000', '#A30000']}
    colorsTime={[7, 5, 2, 0]}
    size={250}
  >
    {({ remainingTime }) => 
    <>
    <Text style={styles.secondsLeft}>{remainingTime}</Text>
    <Text style={styles.timeLeft}>{variableStrings['en-US'].TimeLeft}</Text>
    </>
        }
    
  </CountdownCircleTimer>   
  <Text style={styles.StepsToday}>1,487 {variableStrings['en-US'].step}</Text>    
  <Text style={styles.steps_info}>{variableStrings['en-US'].AlreadyTaken}</Text>
            <View style={styles.steps_data_container}>
                <Text style={styles.stepsHistoryText}>{variableStrings['en-US'].stepsHistory}</Text>
                <ScrollView style={styles.HistoryScrollContainer}>
                    <View style={styles.step_history}>
                        <Text style={styles.history_text}>2000 {variableStrings['en-US'].steps}</Text>
                        <Text style={styles.history_text}>{variableStrings['en-US'].yesterday}</Text>
                    </View>
                    <View style={styles.step_history}>
                    <Text style={styles.history_text}>2000 {variableStrings['en-US'].steps}</Text>
                        <Text style={styles.history_text}>June 7</Text>
                    </View>
                    <View style={styles.step_history}>
                    <Text style={styles.history_text}>2000 {variableStrings['en-US'].steps}</Text>
                        <Text style={styles.history_text}>June 6</Text>
                    </View>
                    <View style={styles.step_history}>
                    <Text style={styles.history_text}>2000 {variableStrings['en-US'].steps}</Text>
                        <Text style={styles.history_text}>June 5</Text>
                    </View>
                    <View style={styles.step_history}>
                    <Text style={styles.history_text}>2000 {variableStrings['en-US'].steps}</Text>
                        <Text style={styles.history_text}>June 4</Text>
                    </View>
                    <View style={styles.step_history}>
                    <Text style={styles.history_text}>2000 {variableStrings['en-US'].steps}</Text>
                        <Text style={styles.history_text}>June 3</Text>
                    </View>
                    <View style={styles.step_history}>
                    <Text style={styles.history_text}>2000 {variableStrings['en-US'].steps}</Text>
                        <Text style={styles.history_text}>June 2</Text>
                    </View>
                    <View style={{height:90,width:"100%"}}></View>
                </ScrollView>
            </View>
          </View>
    </SafeAreaView>
    );
   }

export default Steps;