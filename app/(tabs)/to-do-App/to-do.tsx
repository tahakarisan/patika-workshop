import React from "react";
import { Text, View,Button} from "react-native";
import styles from "./to-do.style";
import DeleteButton from "./DeleteButton";
const ToDo = ({ todo,onCompleted}: { todo: any,onCompleted:()=>void}) => {
    return (
        <View style={styles.container}>
            <View style={styles.toDoText}>
                
            <View style={styles.todoElements}>
                {todo.status ? <Text style={styles.todoHeadCompleted}>{todo.title}</Text> : <Text style={styles.todoHead}>{todo.title}</Text>}
                <DeleteButton
                title="Yap"
                onPress={onCompleted}/>
            </View>
             <Text style={styles.todoDesc}>{todo.description}</Text>
            </View>
        </View>
    );
};

export default ToDo;
