import { useFonts,Montserrat_600SemiBold as montserrat_bold,Montserrat_500Medium as montserrat_thin,Montserrat_800ExtraBold as montserrat_xbold, Montserrat_900Black as montserrat_black} from "@expo-google-fonts/montserrat"
import { processFontFamily } from "expo-font"
import { StyleSheet,Text} from "react-native"
import { Colors } from "react-native/Libraries/NewAppScreen"
type props = {
    info : string
    font :  'montserrat_thin' |'montserrat_bold' |'montserrat_xbold' | 'montserrat_black'
    used ?:'title' | 'box_name'
    color?: string
}

export default function TextFont(props:props){
    const [fontsLoaded] = useFonts({
        montserrat_bold,
        montserrat_thin,
        montserrat_black,
        montserrat_xbold,
    })

    if(!fontsLoaded){
        return null
    }

    const styles= StyleSheet.create({
        color:{
            color: props.color !== ''? props.color : '#000'
        },
        size:{
            fontSize:
                props.used === "title"?20:
                props.used === "box_name"? 30 : 25,

        }
        ,
        font:{
            fontFamily:
                props.font === 'montserrat_thin' ? 'montserrat_thin':
                props.font === 'montserrat_bold'? 'montserrat_bold':
                props.font === 'montserrat_xbold'? 'montserrat_xbold':
                'montserrat_black'
        }
    })


    return (

        <Text style={[styles.color,styles.size,styles.font,{flexWrap:'wrap',width:180}]}>{props.info}</Text>
    )

}

