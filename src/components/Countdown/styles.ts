import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../theme';

export const styles = StyleSheet.create({
    Container: {
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: RFValue(10),
        marginHorizontal: 0
    },
    Title: {
        fontSize: RFValue(16),
        color: COLORS.PLACEHOLDER,
        textTransform: 'uppercase'
    },
    Countdown: {
        fontSize: RFValue(50),
        color: COLORS.TEXT
    }
})