
import {useState, useEffect} from "react";
import {ActivityIndicator, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {COLORS} from '../../theme';
import {MaterialIcons} from '@expo/vector-icons';

import {Audio} from 'expo-av';

interface AudioProps {
    audioSource: string;
};

export function Beat({audioSource} : AudioProps){
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoad, setIsLoad] = useState(false);

    useEffect(() => {
        return () => {
            if (sound) {
                sound.unloadAsync();
            }
        };
    },[sound]);

    async function handlePlayStop(){
        try {
            if(sound){
                if(isPlaying){
                    await sound.pauseAsync();
                    await sound.setPositionAsync(0);
                } else {
                    await sound.playAsync();
                }
                setIsPlaying(!isPlaying);

            } else {
                setIsLoad(true); //quando der play o load começa
                const {sound: audioSound} = await Audio.Sound.createAsync({ uri: audioSource });
                setSound(audioSound);
                await audioSound.playAsync();
                setIsPlaying(true);
                setIsLoad(false); //quando a música carregar o load para
            }
        } catch (error) {
            console.log(`Error playing audio:`, error);
            setIsLoad(false)
        }
    };

    return (
        <TouchableOpacity 
            style={styles.PreviewMusic}
            activeOpacity={0.8}
            onPress={handlePlayStop}
        >
            { isLoad ? (
                <ActivityIndicator size={30} color={COLORS.LIME_DARK} /> 
            ) 
            :
            (
                <MaterialIcons
                    name={isPlaying ? 'stop' : 'play-arrow'}
                    color={isPlaying ? COLORS.RED1 : COLORS.LIME_DARK}
                    size={20}
                />
            )
            }
        </TouchableOpacity>
    )
}