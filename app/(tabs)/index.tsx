import React, { useEffect, useState } from "react";
import { View,Text,TextInput,FlatList} from "react-native";
import styles from "./indexStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import musicData from "../../music-data.json";
import Music from "./music"
function App(){
    const [searchText,setSearchText] = useState("");
    const [filteredMusicData,setMusicData] = useState(musicData);

    useEffect(()=>{ 
        setMusicData(musicData.filter(item=> item.artist.toLowerCase().includes(searchText.toLowerCase())))
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
                 data={filteredMusicData}
                 renderItem={renderItem}
                 keyExtractor={(item) => item.id.toString()}
                 contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>
        
    )
}

export default App;