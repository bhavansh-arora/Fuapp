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
    otp_image:{
        width:0.9*width,
        height:350,
        marginLeft: "5%"
    },
    horizontal_centering_view:{
        display: "flex",
        flex:1,
        alignItems: "center",
        marginTop: 70
    },
    verification_text:{
        fontFamily: "PTSans-Bold",
        fontSize: 35,
        color:COLORS.PRIMARY,
        marginLeft: 20,
    },
    continue_button:{
        width: "90%",
        height: 50,
        backgroundColor: COLORS.PRIMARY,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: "5%",
        marginTop: 20
    },
    continue_button_text:{
        color: COLORS.BACKGROUND,
        fontFamily: "PTSans-Regular",
        fontSize: 19
    },
    otp_info :{
        color: COLORS.INFO,
        fontFamily: "PTSans-Regular",
        fontSize: 19,
        marginLeft: 20,
        marginTop: 10,
    },
    phoneCheck: {
        fontFamily: "PTSans-Regular",
        color: COLORS.BLACK,
        fontSize:25,
        marginLeft: 20
    },
    otp_input:{
        width: '90%', 
        height: 100,
        marginLeft:"5%",
        marginTop:20
    },
    borderStyleBase: {
        width: 30,
        height: 45
      },
     
      borderStyleHighLighted: {
        borderColor: COLORS.PRIMARY,
      },
     
      underlineStyleBase: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderBottomWidth: 4,
        borderRadius:10
      },
     
      underlineStyleHighLighted: {
        borderColor: COLORS.SECONDARY,
      },
})