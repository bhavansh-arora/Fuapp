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
import TasksImage from '../../assets/images/task.png';
import Entypo from 'react-native-vector-icons/Entypo';

function Tasks({navigation}) {
    return (
    <SafeAreaView style={styles.main_container}>
        <StatusBar
        animated={true}
        backgroundColor={COLORS.BACKGROUND}
        barStyle='dark-content' />
        <ScrollView style={styles.scroll_container}>
        <Image source={TasksImage} style={styles.settings_image} />
        <Text style={styles.settings}>{variableStrings['en-US'].tasks}</Text>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].rating}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].appShare}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings_button_container}>
            <Text style={styles.settings_text}>{variableStrings['en-US'].websiteShare}</Text>
            <View style={styles.arrow_bg}>
            <Entypo name="chevron-right" size={25} color={COLORS.BACKGROUND} />
            </View>
        </TouchableOpacity>
        <View style={{width:"100%",height:65}}></View>
        </ScrollView>
    </SafeAreaView>
    );
   }

export default Tasks;