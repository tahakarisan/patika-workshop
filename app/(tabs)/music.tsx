import React from "react";
import { View,Image,Text,Button, Dimensions,SafeAreaView} from "react-native";
import { StyleSheet } from "react-native";

function Music(musics:any){
    return(
            <View style={styles.container}>
            <Image style={styles.image} source={{ uri: musics.imageUrl }}/>
            <View style={styles.content}>
            <Text style={styles.textTitle}>{musics.title}</Text>
                <Text style={styles.artist}>{musics.artist}</Text>
                <Text style={styles.album}>{musics.album} {musics.year}</Text>
                {musics.isSoldOut && <Text style={styles.soldOutText}>Stok Dışı</Text>}
            </View>
            </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#f0f0f0",
        flex:1,
        margin:20,
        padding: 10,
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center",
        flexDirection:"row",
    },
    content:{
        marginLeft:20
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    textTitle: {
        alignSelf:"flex-start",
        textAlign:"left",
        fontSize: 18,
        fontWeight: "bold",
        marginVertical: 5,
        maxWidth:240
    },
    artist: {
        fontSize: 14,
        color: "#555",
    },
    album: {
        fontSize: 14,
        color: "#888",
        maxWidth:200
    },
    soldOutText: {
        color: "red",
        fontWeight: "bold",
        marginTop: 5,
    },
});

export default Music;