import {
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import {PalavrasScreen} from '@screens/PalavrasScreen';
import {QuestionRes} from '@screens/QuestionRes';
import {Themes} from '@screens/Themes';
import {AnswerAttacks} from '@screens/AnswerAttacks';
import {Challenges} from '@screens/Challenges';

import {useNavigation, useRoute} from '@react-navigation/native';

type RouteParams = {
    name: string;
};

export function Training(){

    const route = useRoute();
    const {name} = route.params as RouteParams;

    // Carregar tela correspondente ao nome vindo pela rota
    function loadPageTraining(){
        switch (name) {
            case 'palavrasScreen' : return <PalavrasScreen/>;
            case 'questionRes' : return <QuestionRes/>;
            case 'themes' : return <Themes/>;
            case 'answerAttacks' : return <AnswerAttacks/>;
            case 'challenges' : return <Challenges/>;

            default: return <Text> Página não encontrada. </Text>;
        };
    };

    return (
        <>
            {/* 
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',
            }}>
            
            </View>
            */}

            {loadPageTraining()}
            
        </>
    )
}