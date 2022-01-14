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
    login_image:{
        width:0.9*width,
        height:300,
        marginLeft: "5%"
    },
    horizontal_centering_view:{
        display: "flex",
        flex:1,
        alignItems: "center",
    },
    login_info:{
        color: COLORS.INFO,
        fontFamily: "PTSans-Regular",
        fontSize: 19,
        marginLeft: 20,
        marginTop: 10,
    },
    horizontal_button_container:{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: 50
    },
    login_button:{
        width: "80%",
        height: 50,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop:40
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
    },
    welcome_back: {
        fontFamily: "PTSans-Regular",
        color: COLORS.PRIMARY,
        fontSize:35,
        marginLeft: 20
    },
    fields_input:{
        width:"90%",
        height:45,
        borderWidth:2,
        borderColor: COLORS.PRIMARY,
        paddingLeft: 10,
        borderRadius: 10,
        fontFamily: "PTSans-Regular",
        fontSize: 17,
        marginTop: 30,

    },
    forgotPassword:{
        width:"90%",
        textAlign:"right",
        marginTop:15,
        fontFamily: "PTSans-Bold",
        color: COLORS.PRIMARY,
    },
    horizontalNoAccountRegisterContainer: {
        display: "flex",
        flexDirection: "row",
        marginTop:40,

    },
    noAccount: {
        fontSize:17,
        fontFamily: "PTSans-Bold",
        color: COLORS.INFO,
    },
    registerNow: {
        fontSize:17,
        fontFamily: "PTSans-bold",
        color: COLORS.PRIMARY,
        paddingLeft: 5,
        borderBottomWidth: 2,
        paddingBottom: 1,
        borderColor: COLORS.PRIMARY
    }
})