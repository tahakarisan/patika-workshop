import React, { useEffect, useState } from "react";
import { FlatList, View, Text, TextInput } from "react-native";
import ToDo from "./to-do-App/to-do";
import styles from "./to-do-App/to-do.style";
import indexStyles from "./indexStyle";
import data from "./to-do-App/to-do-data.json";
import AddButton from "./to-do-App/AddButton";

function App() {
    const [id, setId] = useState(""); // TextInput olduğu için string başlatıldı
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [datas, setDatas] = useState(data);
    const [searchInput, setSearchText] = useState("");

    useEffect(() => {
        if(searchInput.length > 0){
          setDatas(data.filter(todo=>todo.description.toLowerCase().includes(searchInput.toLowerCase())));            
        }
        else{
            setDatas(data);
        }
    },[searchInput]);

    const toggleState = (id: number) => {
        const updatedTodos = datas.map(todo =>
            todo.id === id ? { ...todo, status: !todo.status } : todo
        );
        setDatas(updatedTodos);
    };

    function addToDo() {
        const newTask = {
            id: parseInt(id, 10),
            title: title,
            description: description,
            status: false,
        };

        if (isNaN(newTask.id)) {
            alert("Lütfen geçerli bir ID girin!");
            return;
        }

        setDatas([...datas, newTask]);
        setId(""); 
        setTitle("");
        setDescription("");
    }

    return (
        <View style={styles.container}>
            <View style={styles.headElements}>
                <Text style={styles.header}>To Do App</Text>
                <TextInput
                    style={indexStyles.headerInput}
                    placeholder="    Ara"
                    placeholderTextColor={"orange"}
                    onChangeText={setSearchText}
                    value={searchInput}
                />
            </View>
            
            <FlatList
                ListHeaderComponent={<View>
                        <TextInput
                    style={indexStyles.input}
                    placeholder="Id"
                    keyboardType="numeric" // inputMode yerine daha iyi bir seçenek
                    placeholderTextColor={"orange"}
                    
                    onChangeText={setId}
                    value={id}
                />
                <TextInput
                    style={indexStyles.input}
                    placeholder="Title"
                    placeholderTextColor={"orange"}
                    onChangeText={setTitle}
                    value={title}
                />
                <TextInput
                    style={indexStyles.input}
                    placeholder="Description"
                    placeholderTextColor={"orange"}
                    onChangeText={setDescription}
                    value={description}
                />
                <AddButton title="Ekle" onPress={addToDo} />
                        </View>}
                        
                data={datas}
                renderItem={({ item }) => (
                    <ToDo onCompleted={() => toggleState(item.id)} todo={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default App;
