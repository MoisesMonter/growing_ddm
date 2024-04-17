import { View,StyleSheet,Text} from "react-native"

import { colors } from "../../atomes/colors/colors"
import Button_Opacity from "../../atomes/button"
import TextFont from "../../atomes/fonts"
import Separator from "../../atomes/separator"
import User_Info__Perfil from "../../molecules/user_info_perfil"
import User_Info__Buttons from "../../molecules/user_info_buttons"
import { User } from "../listing_users/props"
import { ContainerPai ,ContainerFilho } from "./styles"

export default function User_Info(props:any){
    const styles_colors = StyleSheet.create({
        ContainerPai:{
          backgroundColor: colors.sub_background,
        }
      })
    return(

        <View style={[ContainerPai.Container, styles_colors.ContainerPai]}>
        <User_Info__Perfil Info_User={props.User}  Container={[ContainerFilho.Container,ContainerFilho.Image]} />
        <Separator size='small' color={colors.separator}/>
        {props.User.name != Text ? <User_Info__Buttons Container={ContainerFilho.Container}/>: <></>}
        
        
        </View>
    )
    
}

