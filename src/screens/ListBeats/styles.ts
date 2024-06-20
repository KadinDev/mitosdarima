import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
    },
    TitlePage: {
        fontSize: RFValue(16),
        lineHeight: RFValue(18),
        marginTop: 5,
        textAlign: 'center',
        color: COLORS.TEXT,
        textTransform: 'lowercase'
    },
    TotalBeats: {
        fontSize: RFValue(15),
        color: COLORS.PLACEHOLDER,
        textTransform: 'lowercase',
        textAlign: 'center',
        marginBottom: 5
    },
    ViewBeats: {
        backgroundColor: COLORS.BACKGROUND_HEADER,
        height: RFValue(40),
        paddingHorizontal: 5,
        width: '100%',
        justifyContent: 'center',
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