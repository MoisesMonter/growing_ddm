
import Bar_List_User from "../../molecules/bar_list_user"
import { TouchableOpacity } from "react-native"
import {Click} from "./props"
import { User } from "../../../props";
export default function Listing_User(props: { user: User; click: Click }) {
    return (
      <TouchableOpacity onPress={() => props.click.On_Click(props.user)}>
        <Bar_List_User user={props.user} />
      </TouchableOpacity>
    );
  }