import React from "react";
import { TouchableOpacity ,Text} from "react-native";
import {StyleSheet} from "react-native";

const AddButton = ({title,onPress}:{title:string,onPress:()=>void}) => {
  return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>   
  );
}
const styles = StyleSheet.create({
    button: {
        marginLeft: 160,
        backgroundColor: "orange",
        padding: 12,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default AddButton;