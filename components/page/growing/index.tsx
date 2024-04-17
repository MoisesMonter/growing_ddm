  
import { StyleSheet,ScrollView,View } from "react-native"
import TextFont from "../../atomes/fonts"
import User_Info from "../../organisms/user_info"
import { StatusBar } from "expo-status-bar"
import { Stylesheet_Base as sb} from "../../atomes/stylesheet_base"
import Listing_User from "../../organisms/listing_users"
import {Users,User} from "../../../props"
import {useState,useEffect } from "react"

export function Growing(){
    const [User, setUser] = useState(Users[0]);

    useEffect(() => {
        setUser(Users[0]);
    }, []);
    
    const update_user = (newUser: User) => setUser(newUser);


    return(      
    <>
        <TextFont info='Growing' font="montserrat_thin" used="title"/>
        <User_Info User={User}/>
        <StatusBar style="auto" />
        <ScrollView style={ContainerFilho.Listing_External}>
            {Users.map((user) => (<View style={ContainerFilho.Listing}><Listing_User  user={user} click={{ On_Click: update_user }}/></View>))
            }
        </ScrollView>
    </>
    )
}


export const ContainerFilho = StyleSheet.create({
    Container:{
      flex:0,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems: 'center',
      borderRadius: sb.borderradius,
    },
    Listing_External:{
        marginTop:25,
    },
    Listing:{
        marginTop:15,}
    })