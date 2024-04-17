
import { View,StyleSheet,TouchableOpacity,Text } from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"

type props={
    button_name: string
    button_name_color?:string
    button_color?: string
    button_size: 'small' | 'medium' |'large'
    onPress?: ()=>void
}

export default function Button_Opacity(props:props){
        const style = StyleSheet.create({
            font_props:{
                backgroundColor:props.button_color,
                color:props.button_name_color,
                minWidth:
                    props.button_size === 'small'   ?   50  :
                    props.button_size === 'medium'  ?   110 :
                    props.button_size === 'large'   ?   150 :
                    210
            },
            container:{

                textAlign:'center',
                borderRadius:5,
                paddingTop:5,
                paddingBottom:5,
            }
        })

        return(
        <TouchableOpacity> 
            <Text style={[style.container,style.font_props]}>{props.button_name}</Text>
        </TouchableOpacity>)

}