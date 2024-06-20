import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';
import { COLORS } from '@src/theme';
import { RFValue } from 'react-native-responsive-fontsize';

interface ButtonProps extends TouchableOpacityProps {
    icon: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({icon, ...rest} : ButtonProps){
    return (
        <TouchableOpacity
            {...rest}
            activeOpacity={0.8}
        >
            <MaterialIcons
                name={icon}
                color={COLORS.TEXT}
                size={RFValue(20)}
            />
        </TouchableOpacity>
    )
}