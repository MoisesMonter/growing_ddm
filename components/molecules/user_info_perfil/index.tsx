
import { View, Image } from 'react-native'
import TextFont from '../../atomes/fonts'
import { colors } from '../../atomes/colors/colors'
import { User } from '../../../props';
import { Container } from './props'
export default function User_Info__Perfil(props: {Info_User: User, Container: any}){
  return(
    <View style={[props.Container[0]]}>
      <Image style={[props.Container[1]]}
        source={{uri: props.Info_User.photo}}
      />
      <TextFont info={props.Info_User.name} font="montserrat_xbold" used="box_name" color={colors.name}/>
    </View>
  )  
}
