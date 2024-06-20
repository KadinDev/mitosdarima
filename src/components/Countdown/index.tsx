import {
    View, 
    Text,
} from 'react-native';

import {styles} from './styles';

import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '@src/theme';

interface CountdownProps {
    title: string;
    countdown: string;
};

export function Countdown({title, countdown} : CountdownProps){
    return (
        <View style={styles.Container}>
            <Text style={styles.Title}> {title} </Text>
            <Text style={styles.Countdown}> {countdown} </Text>
        </View>
    )
}