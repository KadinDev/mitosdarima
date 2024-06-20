import {Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../theme';

interface TitleProps {
    title: string;
};

export function Title({title} : TitleProps){
    return (
        <Text style={styles.title}> {title} </Text>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: RFValue(16),
        lineHeight: RFValue(18),
        marginTop: 10,
        textAlign: 'center',
        color: COLORS.TEXT,
        textTransform: 'lowercase'
    }
})