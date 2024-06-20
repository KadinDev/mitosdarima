import {
    Text,
    View,
    FlatList
} from 'react-native';

import {styles} from './styles';
import {RFValue} from 'react-native-responsive-fontsize';

import { Header } from '@src/components/Header';
import { Title } from '@src/components/Title';
import { TotalPalavras } from '@src/components/TotalPalavras';
import { beats } from '@src/utils/beats/listBeats';
import { Separator } from '@src/components/Separator';
import { Beat } from '@src/components/Beat';

export function ListBeats(){
    return (
        <View style={styles.Container}>
            
            <Header title='Beats' buttonGoBack />
            <Title title='Lista de Beats' />
            <TotalPalavras total={`${beats.length} beats para seu treino`} />
            <Separator/>
            
            <FlatList
                data={beats}
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                    <View key={item.id} style={styles.ViewBeats}>
                        <Text style={styles.NameBeat} numberOfLines={1}>
                            {item.title}
                        </Text>
                        <Beat audioSource={item.audioUrl} />
                    </View>
                )}

                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: RFValue(15),
                    paddingBottom: RFValue(60),
                    paddingTop: RFValue(20)
                }}
                ItemSeparatorComponent={() => <Separator/>}
            />
            
        </View>
    )
}