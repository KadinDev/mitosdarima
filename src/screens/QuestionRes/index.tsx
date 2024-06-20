import {useState, useEffect} from 'react';
import {
    Text,
    View,
} from 'react-native';

import { styles } from './styles';
import {SoundProps} from '../../dtos/SoundDTO';

import {ModalMusic} from '@components/ModalMusic';
import {Header} from '@components/Header';
import {Title} from '@components/Title';
import {TotalPalavras} from '@components/TotalPalavras';
import {Separator} from '@components/Separator';
import {Countdown} from '@components/Countdown';
import {ButtonIcon} from '@components/ButtonIcon';
import {questionsEres} from '@utils/QuestionsRes';
import { Beat } from '@src/components/Beat';

export function QuestionRes(){
    
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedItem, setSelectedItem] = useState<SoundProps | null>(null);
    const [currentWord, setCurrentWord] = useState('');
    const [isAutomatic, setIsAutomatic] = useState(false);
    const [countdown, setCountdown] = useState(15);

    function handleItemSelected(item: SoundProps) {
        setSelectedItem(item);
        setModalVisible(false);
    };

    function handleNextWord(){
        const indiceAleatorio = Math.floor(Math.random() * questionsEres.length);
        const palavraAleatoria = questionsEres[indiceAleatorio];
        setCurrentWord(palavraAleatoria);
    };

    function handleCountdown(){
        let seconds = 15;
        setCountdown(seconds);
        
        const interval = setInterval(() => {
            seconds--;
            if (seconds > 0){
                setCountdown(seconds);
            } else {
                clearInterval(interval);
                setCountdown(15);
            };

        }, 1000);

        return interval;
    };

    useEffect(() => {
        if(isAutomatic){
            const interval = setInterval(() => {
                const indiceAleatorio = Math.floor(Math.random() * questionsEres.length);
                const wordAleatory = questionsEres[indiceAleatorio];
                setCurrentWord(wordAleatory);
            }, 15000);

            const countdownInterval = handleCountdown();

            return () => {
                clearInterval(interval);
                clearInterval(countdownInterval);
            };
        }
    },[isAutomatic, currentWord])

    return (
        <View style={styles.Container}>
            
            <Header title='respostas' buttonGoBack />
            <Title title='Treinar respostas' />
            <TotalPalavras total={`${questionsEres.length} perguntas`} />
            <Separator/>
            
            {isAutomatic &&
                <Countdown 
                    title='próxima pergunta em' 
                    countdown={`${countdown}`} 
                />
            }

            <View style={styles.ViewPalavra}>
                <Text style={styles.TextViewPalavra}> {currentWord} </Text>
            </View>

            <View style={styles.DivSound} >
                <ButtonIcon 
                    style={styles.ButtonChangeSound}
                    icon='music-note' 
                    onPress={() => setModalVisible(true)} 
                />
            </View>

            <View style={styles.DivButtons}>
                {!isAutomatic ? 
                    <ButtonIcon 
                        style={styles.ButtonChangeSound}
                        icon='play-arrow' 
                        onPress={() => setIsAutomatic(true)} 
                    />
                    :
                    <ButtonIcon 
                        style={styles.ButtonChangeSound}
                        icon='stop' 
                        onPress={() => setIsAutomatic(false)} 
                    />
                }

                {!isAutomatic &&
                    <View style={styles.ControlPalavra}>
                        <ButtonIcon
                            icon='skip-next'
                            onPress={handleNextWord}
                        />
                    </View>
                }
            </View>

            {selectedItem && (
                <View style={styles.ShowTitleBeat}>
                    <Text 
                        style={styles.NameBeat}
                        numberOfLines={1}
                    >
                        {selectedItem.title}
                    </Text>

                    <Beat key={selectedItem.id} audioSource={selectedItem.audioUrl} />
                </View>
            )}

            <ModalMusic visible={modalVisible} onItemSelected={handleItemSelected} />
            
        </View>
    )
}