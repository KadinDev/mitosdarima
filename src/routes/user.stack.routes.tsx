import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {About} from '@screens/About';
import {AnswerAttacks} from '@screens/AnswerAttacks';
import {Home} from '@screens/Home';
import {ListBeats} from '@screens/ListBeats';
import {PalavrasScreen} from '@screens/PalavrasScreen';
import {QuestionRes} from '@screens/QuestionRes';
import {Themes} from '@screens/Themes';
import {Training} from '@screens/Training';
import {Challenges} from '@screens/Challenges';

const { Navigator, Screen, Group } = createNativeStackNavigator();

export function UserStackRoutes(){
    return (
        <Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName='home'
        >
            <Group 
                screenOptions={{
                    animation: 'fade_from_bottom'
                }}
            >
                <Screen name='home' component={Home} />
                <Screen name='about' component={About} />

                <Screen name='training' component={Training} />
                
                <Screen name='answerAttacks' component={AnswerAttacks} />
                <Screen name='listbeats' component={ListBeats} />
                <Screen name='palavrasScreen' component={PalavrasScreen} />
                <Screen name='questionRes' component={QuestionRes} />
                <Screen name='themes' component={Themes} />
                <Screen name='challenges' component={Challenges} />
            </Group>
        </Navigator>
    )
}