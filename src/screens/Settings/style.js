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
    }
    
})