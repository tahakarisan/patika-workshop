import React, { useState } from "react";
import { FlatList, View,Text,Button} from "react-native";
import ToDo from "./to-do-App/to-do";
import styles from "./to-do-App/to-do.style";
import data from "./to-do-App/to-do-data.json";
import AddButton from "./to-do-App/AddButton";
function App(){
    const [datas, setDatas] = useState(data);
    const toggleState = (id: number) => {
        const updatedTodos = datas.map(todo => 
            todo.id === id ? { ...todo, status: !todo.status } : todo
        );
        setDatas(updatedTodos)
        console.log(datas);
    };
    return (
        <View style={styles.container}>
           <View style={styles.headElements}>
                <Text style={styles.header}>To Do App</Text>
                <AddButton
                title="Ekle"
                onPress={()=>{console.log("Basıldı")}}/>
           </View>
           <FlatList
                data={datas}
                renderItem={({ item }) => <ToDo onCompleted={()=>toggleState(item.id)
                } todo={item} />}
                keyExtractor={(item) => item.id.toString()}
           /> 
        </View>
    )
}

export default App;