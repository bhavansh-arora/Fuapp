import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../assets/colors/theme_colors'
let {width, height} = Dimensions.get('window');

export default StyleSheet.create({
    main_container:{
        backgroundColor:COLORS.BACKGROUND,
        flex:1
    },
    scroll_container:{
        backgroundColor:COLORS.BACKGROUND,
        flex:1
    },
    welcome_image:{
        width:0.9*width,
        height:450,
        marginLeft: "5%"
    },
    horizontal_centering_view:{
        display: "flex",
        flex:1,
        alignItems: "center",
    },
    welcome_text:{
        fontFamily: "PTSans-Bold",
        fontSize: 35,
        color:COLORS.PRIMARY,
    },
    welcome_info:{
        color: COLORS.INFO,
        fontFamily: "PTSans-Regular",
        fontSize: 21,
        width:"80%",
        textAlign:"center",
        marginTop: 20
    },
    horizontal_button_container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 50
    },
    login_button:{
        width: "40%",
        height: 50,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    signup_button:{
        width: "40%",
        height: 50,
        backgroundColor: COLORS.BACKGROUND,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderColor: COLORS.PRIMARY,
    },
    login_button_text:{
        color: COLORS.BACKGROUND,
        fontFamily: "PTSans-Regular",
        fontSize: 19
    },
    signup_button_text:{
        color: COLORS.PRIMARY,
        fontFamily: "PTSans-Regular",
        fontSize: 19
    }
})