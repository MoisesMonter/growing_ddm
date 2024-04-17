import { TouchableOpacity } from "react-native"
import {FontAwesome5} from '@expo/vector-icons'
import { props } from "./props"
export default function AddUser(props:props){
    return(
    <TouchableOpacity>
        <FontAwesome5 name='user-plus' size={15}  style={props.container}/>
    </TouchableOpacity>)
}