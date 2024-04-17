
import { Text,View,StyleSheet,Image } from "react-native"
import { colors} from "../../atomes/colors/colors"
import { Stylesheet_Base as sb } from "../../atomes/stylesheet_base"
import {User} from "./props"
import AddUser from "../../atomes/button/adduser"
import Value_Use_Statistic from "../value_user_statistic"



export default function Bar_List_User(props:{user:User}){
    
    return(
    <View style={[styles.container]}>
      <View style={styles.sub_container}>
        <Image style={{width:50,height:50, borderRadius:100}}
            source={{uri: props.user.photo}}/>
        <Text> {props.user.name.length>=16?props.user.name.slice(0,14)+'...':props.user.name}</Text>
        </View>
        <View style={{flexDirection:'row',gap:10,alignItems:'center',justifyContent:'space-between'}}>
            <Value_Use_Statistic container={props.user.data>=0?[styles.value_data_positive,styles.style_info]:[styles.value_data_negative,styles.style_info]} value={props.user.data}/>
        <AddUser container={[styles.type_icon,styles.style_info]}/>
        </View>
    </View>
    )
}
//{{backgroundColor: colors.sub_background ,padding:10, borderRadius:5,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}
export const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.sub_background,
        padding: sb.pading_box_medium,
        borderRadius: sb.borderradius,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    sub_container:{
        flexDirection:'row',
        gap:10,
        alignItems:'center',
        justifyContent:'space-between',
    },
    value_data_positive:{
        backgroundColor: colors.value_positive_background,
        color:colors.value_positive_color,
    },
    value_data_negative:{
        backgroundColor: colors.value_negative_background,
        color:colors.value_negative_color,
    }
    ,
    type_icon:{
        color:colors.icon_color_gray,
        backgroundColor:colors.icon_color_background,
    },
    style_info:{
        padding:sb.pading_box_medium,
        borderRadius:sb.borderradius,
    }
})