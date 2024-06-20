import { COLORS } from "../../theme";
import { StyleSheet } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const styles = StyleSheet.create({
    PreviewMusic: {
        position: 'absolute',
        backgroundColor: COLORS.BACKGROUND,
        height: RFValue(38),
        width: RFValue(38),
        alignItems: 'center',
        justifyContent: 'center',
        right: 1,
        zIndex: 10
    }
})
