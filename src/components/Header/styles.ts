import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
    HeaderContainer: {
        width: '100%',
        height: RFValue(150),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: RFValue(20),
        backgroundColor: COLORS.BACKGROUND_HEADER,
        borderBottomWidth: 5,
        borderBottomColor: COLORS.BACKGROUND_TRANSPARENT,
        paddingTop: RFValue(50),
        position: 'relative',
    },
    GoBack: {
        position: 'absolute',
        right: RFValue(20),
        bottom: RFValue(15),
        alignItems: 'center',
        justifyContent: 'center',
        width: RFValue(40),
        height: RFValue(40),
        borderRadius: RFValue(20),
        backgroundColor: COLORS.BACKGROUND,
        padding: 5
    },
    Greeting: {
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: 10
    },
    GreetingVip: {
        height: RFValue(50),
        width: RFValue(50),
    },
    GreetingText: {
        fontSize: RFValue(16),
        color: COLORS.TEXT,
        fontFamily: FONTS.TITLE,
        textTransform: 'uppercase',
        letterSpacing: 5
    },
    RaioHeader: {
        position: 'absolute',
        zIndex: 0,
        opacity: 0.2,
        height: '100%',
    }
})