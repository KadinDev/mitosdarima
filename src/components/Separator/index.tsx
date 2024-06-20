import {View, StyleSheet} from 'react-native';
import {COLORS} from '../../theme';

export function Separator(){
    return (
        <View style={styles.container}/>
    )
};

const styles = StyleSheet.create({
    container: {
        height: 1,
        width: '100%',
        backgroundColor: COLORS.BACKGROUND_HEADER,
        marginTop: 2
    }
})