
import { View } from "react-native"
import Button_Opacity from "../../atomes/button"
import { props } from "./props"
import { colors } from "../../atomes/colors/colors"

export default function User_Info__Buttons(props : props){
    return(
        <View style={[props.Container]}>
        <Button_Opacity button_name='View Profile' button_color={colors.button_gray_bg} button_name_color={colors.button_gray_tc} button_size='medium' />
        <Button_Opacity button_name='Add User' button_color={colors.button_green_bg} button_name_color={colors.button_green_tc} button_size='medium' />
      </View>
    )
}