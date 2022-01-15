import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors/theme_colors'
let {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    main_container:{
        backgroundColor:COLORS.ICON_COLOR,
        flex:1
    },
    container:{
        backgroundColor:COLORS.ICON_COLOR,
        flex:1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 30
    },
    navbar: {
        width:"100%",
        height: 40,
        elevation: 5,
        backgroundColor: COLORS.PRIMARY,
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,
elevation: 5,
          shadowColor: COLORS.BACKGROUND,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingBottom: 5,
          paddingHorizontal: 15,
          borderBottomLeftRadius: 15,
          borderBottomRightRadius: 15,

    },
    dollar_image:{
        width:20,
        height:20,
        marginRight: 5
    },
    amount_container:{
        display: "flex",
        flexDirection: "row",
        flex:1,
        alignItems: "center",
    },
    welcome_text: {
        flex:1,
        fontFamily: "PTSans-Bold",
        fontSize: 19,
        color: COLORS.BACKGROUND
    },
    steps_container : {
        width: "90%",
        marginLeft: "5%",
        height: 300,
        backgroundColor:COLORS.ICON_COLOR,
        marginTop: 20,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        paddingTop: 50,
    },
    steps_data_container: {
        height:"60%",
        width: "100%",
        borderRadius: 30,
        backgroundColor:COLORS.ICON_COLOR,
        marginTop: 10
    },
    stepsHistoryText: {
        fontFamily: "PTSans-Bold",
        fontSize: 21,
        color: COLORS.BACKGROUND,
        marginTop: 10,
        paddingLeft: 20,
        marginBottom: 10
    },
    step_history: {
        width: "90%",
        height: 50,
        backgroundColor: COLORS.BACKGROUND,
        marginLeft: "5%",
        borderRadius: 10,
        marginVertical: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 15
    },
    HistoryScrollContainer: {
        flex:1
    },
    history_text: {
        fontFamily: "PTSans-Bold",
        color: COLORS.ICON_COLOR,
        fontSize: 17
    },
    StepsToday: {
        color: COLORS.BACKGROUND,
        fontFamily: "PTSans-Bold",
        fontSize: 35,
        marginTop: 20
    },
    steps_info: {
        color: COLORS.ICON_UNSELECTED,
        fontFamily: "PTSans-Bold",
        fontSize: 25,
    },
    timeLeft: {
        color: COLORS.ICON_UNSELECTED,
        fontFamily: "PTSans-Bold",
        fontSize: 25,
    },
    secondsLeft: {
        color: COLORS.BACKGROUND,
        fontFamily: "PTSans-Bold",
        fontSize: 55,
    }
    
})