import {StyleSheet} from 'react-native';
import {COLORS, FONTS} from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
        position: 'relative'
    },
    ViewBeats: {
        backgroundColor: COLORS.BACKGROUND,
        height: RFValue(40),
        paddingHorizontal: RFValue(5),
        width: '100%',
        position: 'relative',
        justifyContent: 'center',
    },
    NameBeat: {
        color: COLORS.LIME_DARK,
        fontSize: RFValue(14),
        fontFamily: FONTS.TEXT,
        zIndex: 1,
        opacity: 0.8,
        textTransform: 'lowercase',
        width: '80%'
    },
    Separator: {
        width: '100%',
        height: RFValue(2),
        backgroundColor: COLORS.BACKGROUND_HEADER
    }
})