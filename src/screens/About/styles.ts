import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, FONTS} from '../../theme';

export const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
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
    }
})   