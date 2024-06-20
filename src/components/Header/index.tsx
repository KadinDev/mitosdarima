import {
    View, 
    Text,
    Image,
    TouchableOpacity
} from 'react-native';

import {styles} from './styles';

import vip from '@assets/vip.png';
import raio from '@assets/raio.png';

import {useNavigation} from '@react-navigation/native';
import {MaterialIcons} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import { COLORS } from '@src/theme';

interface TitleProps {
    title?: string;
    buttonGoBack?: boolean;
};

export function Header({
    title = 'mitos da rima', 
    buttonGoBack = false
} : TitleProps){
    
    const navigation = useNavigation();

    return (
        <View style={styles.HeaderContainer}>
            {
                buttonGoBack && (
                    <TouchableOpacity
                        style={styles.GoBack}
                        activeOpacity={0.5}
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons
                            name='arrow-drop-down'
                            size={RFValue(25)}
                            color={COLORS.TEXT}
                        />
                    </TouchableOpacity>
                )
            }

            <View style={styles.Greeting}>
                <Image
                    style={styles.GreetingVip}
                    source={vip}
                />
                <Text style={styles.GreetingText}> {title} </Text>
            </View>

            <Image
                source={raio}
                style={styles.RaioHeader}
                resizeMode='cover'
            />
        </View>
    )
}