import {Text, StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS} from '../../theme';

interface TotalProps {
    total: string;
};

export function TotalPalavras({total} : TotalProps){
    return (
        <Text style={styles.title}> {total} </Text>
    )
};

const styles = StyleSheet.create({
    title: {
        fontSize: RFValue(15),
        textAlign: 'center',
        color: COLORS.PLACEHOLDER,
        textTransform: 'lowercase'
    }
})