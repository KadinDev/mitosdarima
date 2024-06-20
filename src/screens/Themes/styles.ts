import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        position: 'relative'
    },
    TitlePage: {
        fontSize: RFValue(18),
        lineHeight: RFValue(20),
        marginBottom: RFValue(20),
        textAlign: 'center',
        color: COLORS.TEXT,
        textTransform: 'uppercase'
    },
    Info: {
        fontSize: RFValue(16),
        lineHeight: RFValue(18),
        marginTop: RFValue(10),
        textAlign: 'justify',
        color: COLORS.PLACEHOLDER,
        paddingBottom: RFValue(80)
    },
    ViewPalavra: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        //position: 'relative',
        top: '10%',
    },
    TextViewPalavra: {
        fontSize: RFValue(18),
        lineHeight: RFValue(22),
        textAlign: 'center',
        color: COLORS.TEXT,
        textTransform: 'uppercase',
        paddingVertical: 0,
        paddingHorizontal: RFValue(20)
    },
    DivSound: {
        position: 'absolute',
        left: RFValue(20),
        bottom: RFValue(30)
    },
    ButtonChangeSound: {
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(20),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BACKGROUND_HEADER
    },
    DivButtons: {
        position: 'absolute',
        right: RFValue(20),
        bottom: RFValue(30)
    },
    ControlPalavra: {
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(25),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.BACKGROUND_HEADER,
        marginTop: RFValue(20)
    },
    ShowTitleBeat: {
        backgroundColor: COLORS.BACKGROUND_HEADER,
        position: 'absolute',
        left: RFValue(75),
        right: RFValue(75),
        bottom: RFValue(30),
        height: RFValue(40),
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingLeft: 10,
        borderRadius: 5
    },
    NameBeat: {
        color: COLORS.LIME_DARK,
        fontSize: RFValue(14),
        fontFamily: FONTS.TEXT,
        zIndex: 1,
        opacity: 0.8,
        textTransform: 'lowercase',
        width: '85%'
    }
})   