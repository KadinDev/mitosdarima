import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    ImageBackground
} from 'react-native';

import {styles} from './styles';

import {Header} from '@components/Header';

import {COLORS} from '../../theme';
import {trainingNavigation} from '@utils/navigationTraining';
import people from '@assets/festa.png';
import { RFValue } from 'react-native-responsive-fontsize';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

export function Home(){
    const navigation = useNavigation();

    function handleNavigate(item: string){
        navigation.navigate('training', {name: item});
    };

    return (
        <View style={{flex: 1, backgroundColor: COLORS.BACKGROUND}} >
            <Header/>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    flex: 1, paddingBottom: 40
                }}
            >
                {/*
                Eu poderia criar várias View colocando cada botão separado e o navigation para cada um de forma separada,
                mas para ficar menos código eu coloquei todos nesse .map abaixo, e levo todos para uma mesma tela (Training),
                nesse tela de Training eu mostro o conteúdo dentro dela de acordo com a escolha do usuário. nela eu renderizo
                todas as SCREENS
                */}
                {trainingNavigation.map(item => (
                    <View style={styles.Item} key={item.id} >
                        <ImageBackground 
                            source={people} 
                            resizeMode='cover'
                        >
                            <TouchableOpacity 
                                style={styles.ButtonNavigation} 
                                activeOpacity={0.8} 
                                onPress={() => handleNavigate(item.navigation)}    
                            >
                                <Text style={styles.TitleButtonNavigation} > {item.name} </Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>
                ))}

            </ScrollView>


            <View style={styles.Footer}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.ButtonFreeStyle}
                    onPress={() => navigation.navigate('listbeats')}
                >
                    <MaterialIcons 
                        name='music-note' 
                        size={RFValue(20)} 
                        color={COLORS.TEXT} 
                    />
                </TouchableOpacity>
                
                <Text style={styles.TextFooter}> versão 1.0 </Text>

                <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.ButtonAbout}
                    onPress={() => navigation.navigate('about')}
                >
                    <MaterialIcons 
                        name='info' 
                        size={RFValue(20)} 
                        color={COLORS.TEXT} 
                    />
                </TouchableOpacity>

            </View>

        </View>
    )
}