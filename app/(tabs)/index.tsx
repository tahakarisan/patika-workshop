import React, { useEffect, useState } from "react";
import { View,Text,TextInput,FlatList} from "react-native";
import styles from "./indexStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import musicData from "../../music-data.json";
import Music from "./music"
function App(){
    const [searchText,setSearchText] = useState("");
    
    useEffect(()=>{
        console.log(searchText)
    }
    ,[searchText])
    const renderItem = ({item}:any) => (
        <Music {...item} />
    );
      

    return(
            <View style={styles.them}>
                <TextInput
                    inputMode="search"
                    style={styles.input}
                    placeholder="   ...  Search"
                    placeholderTextColor={"white"}
                    onChangeText={setSearchText}
                    value={searchText}
                />
                <FlatList
                 data={musicData}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.id.toString()}
                />
            </View>
        
    )
}

export default App;