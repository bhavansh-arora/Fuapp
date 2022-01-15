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
    settings_image:{
        width:0.40*width,
        height:165,
        marginLeft: "5%",
        marginLeft: "30%",
        marginTop: 20,
    },
    settings_button_container:{
        width:"100%",
        height: 65,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        borderColor:COLORS.PRIMARY,
        borderWidth: 0.5
    },
    arrow_bg:{
        width: 30,
        height: 30,
        borderRadius: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: COLORS.ICON_COLOR
    },
    settings_text:{
        fontFamily: "PTSans-Bold",
        fontSize: 18,
        color: COLORS.ICON_COLOR
    },
    settings: {
        fontFamily: "PTSans-Bold",
        fontSize:29,
        color: COLORS.BLACK,
        textAlign: "center",
        marginBottom: 50,
        marginTop: 20
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
    
})