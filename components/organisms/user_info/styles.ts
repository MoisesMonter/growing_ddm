import { StyleSheet } from "react-native";
import { Stylesheet_Base as sb} from "../../atomes/stylesheet_base";

export const ContainerPai  = StyleSheet.create({
    Container: {
      justifyContent:'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      width:'100%',
      maxHeight:'30%',
      height: '52%',
      borderRadius: sb.borderradius,
      margin: 2,
      flex: 0,
      paddingLeft:'5%',
      paddingRight:'5%',
      gap:30,
  },
  

  });
  
export const ContainerFilho = StyleSheet.create({
  Image: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
    borderRadius:sb.image_borderRadius,
  
  },
  Container:{
    flex:0,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems: 'center',
    borderRadius:sb.borderradius,
  },
  })