import { View } from "react-native"
import { StyleSheet } from "react-native"
type props={
    size: "small" | "medium" | "large"
    color?: string
}
export default function Separator(props:props){
    const styles = StyleSheet.create({
        colors:{
            backgroundColor: props.color === ''? 'black': props.color
        },
        size:{
            maxWidth:'auto',
            width:'100%',
            height: 
                props.size === 'small'? 2:
                props.size === 'medium'? 3:
                5,
        }

    })

    return (<View style={[styles.size,styles.colors]}/>)
}