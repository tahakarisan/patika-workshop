import React from "react";
import { TouchableOpacity ,Text} from "react-native";
import {StyleSheet} from "react-native";

const DeleteButton = ({title,onPress}:{title:string,onPress:()=>void}) => {
  return (
        <TouchableOpacity style={styles.buttonDelete} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>   
  );
}
const styles = StyleSheet.create({
    buttonDelete: {
        marginTop:10,
        marginLeft: 160,
        backgroundColor: "orange",
        width:40,
        height:40,
        borderRadius: 5,
        alignItems: "center",
        marginRight:12,
    },
    buttonText: {
        paddingTop:5,
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default DeleteButton;