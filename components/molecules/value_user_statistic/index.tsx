
import { View,Text,StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { props } from "./props";
export default function Value_Use_Statistic(props:props){

    return (
        <View style={[styles.container,props.container[0],props.container[1]]}>
            <AntDesign name={props.value>=0?"caretup":"caretdown"} style={[props.container[0]]} />
            <Text style={[props.container[0],{fontWeight:"bold"} ]}>{props.value >0? '+ '+props.value.toString():'- '+Math.abs(props.value).toString()}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        gap:10,
    }
})