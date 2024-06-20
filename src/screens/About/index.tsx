import {
    Text,
    View,
    ScrollView
} from 'react-native';

import {styles} from './styles';

import {Header} from '@components/Header';
import { RFValue } from 'react-native-responsive-fontsize';

export function About(){
    return (
        <View style={styles.Container} >
            <Header buttonGoBack />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingTop: RFValue(20),
                    paddingHorizontal: RFValue(20)
                }}
            >

                <Text style={styles.TitlePage}> sobre nós </Text>

                <Text style={styles.Info}>
                    Bem-vindo ao "Mitos da Rima", o aplicativo perfeito para aprimorar suas habilidades de freestyle e se tornar um mestre da rima! {'\n\n'}
                    Com uma ampla variedade de recursos incríveis, este aplicativo foi cuidadosamente projetado para ajudar você a aperfeiçoar sua arte de improvisar rimas. {'\n\n'}
                    Explore mais de 45 beats exclusivos que oferecem a base perfeita para você praticar sua fluência e ritmo.{'\n'}
                    Mas não para por aí! "Mitos da Rima" vai além dos treinos básicos. {'\n\n'} 
                    Desafie-se com nossos desafios especiais, projetados para estimular sua criatividade e ajudá-lo a desenvolver suas habilidades de improviso.{'\n\n'} 
                    Responda perguntas, rime sobre temas específicos, enfrente ataques de rima e supere o desafio de combinar as palavras mostradas na tela.{'\n\n'} 
                    Cada desafio proporciona uma oportunidade única de aprimorar suas habilidades e levar seu freestyle a um nível superior.{'\n\n'}
                    {'\n'}
                    Playlist desses beats e muito mais.{'\n'} 
                    Youtube: @Turnoffcapslock

                    {'\n\n'}
                    TIKTOK:{'\n'}
                    a fazer... 
                </Text>

            </ScrollView>
        </View>
    )
}