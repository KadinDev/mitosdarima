import {useState, useEffect} from 'react';

import {
    Modal,
    View,
    FlatList,
    TouchableOpacity,
    Text
} from 'react-native';

import {styles} from './styles';
import {COLORS} from '../../theme';
import {RFValue} from 'react-native-responsive-fontsize';
import {beats} from '@utils/beats/listBeats';
import {SoundProps} from '../../dtos/SoundDTO';

import {Beat} from '@components/Beat';

interface ModalProps {
    visible: boolean;
    onItemSelected: (item: SoundProps) => void;
};

export function ModalMusic({visible, onItemSelected} : ModalProps){

    function handleItemSelected(item: SoundProps){
        onItemSelected(item)
    };

    return (
        <Modal 
            visible={visible}
            transparent={true} 
            animationType='slide' 
            style={{backgroundColor: COLORS.BACKGROUND_TRANSPARENT}}
        >
            <View style={{height: RFValue(200)}} />

            <FlatList
                data={beats}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <View
                        key={item.id}
                        style={styles.ViewBeats}
                    >
                        <TouchableOpacity 
                            activeOpacity={0.8} 
                            onPress={() => handleItemSelected(item) }
                        >
                            <Text style={styles.NameBeat} numberOfLines={1}> {item.title} </Text>
                        </TouchableOpacity>

                        <Beat audioSource={item.audioUrl} />

                    </View>
                )}

                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: RFValue(20),
                    paddingBottom: RFValue(80),
                    backgroundColor: COLORS.BACKGROUND
                }}
                ItemSeparatorComponent={() => <View style={styles.Separator} /> }
            />
        </Modal>
    )
}