import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
    Container: {
        backgroundColor: COLORS.BACKGROUND,
        paddingBottom: RFValue(80),
    },
    Item: {
        marginTop: RFValue(15),
        width: '100%',
        alignItems: 'center'
    },
    ButtonNavigation: {
        height: RFValue(40),
        width: RFValue(300),
        alignItems: 'center',
        justifyContent: 'center'
    },
    TitleButtonNavigation: {
        fontSize: RFValue(14),
        color: COLORS.TEXT,
        fontFamily: FONTS.TEXT,
        textTransform: 'uppercase',
        backgroundColor: COLORS.BACKGROUND_HEADER,
        paddingHorizontal: RFValue(20),
        paddingVertical: RFValue(5),

    },
    RaioHeader: {
        position: 'absolute',
        zIndex: 0,
        opacity: 0.2,
        height: '100%',
    },
    Footer: {
        height: RFValue(40),
        backgroundColor: COLORS.BACKGROUND_HEADER,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        flexDirection: 'row',
        paddingHorizontal: RFValue(20)
    },
    ButtonFreeStyle: {
        position: 'absolute',
        top: RFValue(-35),
        backgroundColor: COLORS.BLUE,
        height: RFValue(40),
        width: RFValue(40),
        borderRadius: RFValue(25),
        alignItems: 'center',
        justifyContent: 'center',
        left: '50%'
    },
    TextFooter: {
        color: COLORS.PLACEHOLDER,
        fontFamily: FONTS.TEXT,
        fontSize: RFValue(14),
        textTransform: 'capitalize'
    },
    ButtonAbout: {
        height: RFValue(20),
        width: RFValue(20),
        borderRadius: RFValue(15),
        alignItems: 'center',
        justifyContent: 'center'
    }
})