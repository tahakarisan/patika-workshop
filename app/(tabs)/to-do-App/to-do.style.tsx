import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#102027",
        padding: 10,
    },
    todoElements:{
        flexDirection:"row",
        justifyContent: "space-between", 
    },
    header: {
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: 20,
        color: "orange",
    },
    todoHead:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "left",
        padding: 12,
        color: "orange",
        textDecorationLine:"none",
    },
    todoHeadCompleted:{
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "left",
        padding: 12,
        color: "green",
        textDecorationLine:"line-through",
    },
    headElements:{
        flexDirection:"row",
    },
    todoDesc:{
        fontSize: 18,
        textAlign: "left",
        paddingLeft:12,
        paddingTop:2,
        paddingBottom:12,
        color:"white"
    },
    inputContainer: {
        backgroundColor: "#fff",
        padding: 10,
        marginVertical: 10,
        borderRadius: 5,
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    toDoContainer: {
        backgroundColor: "#fff",
        padding: 10,
        borderRadius: 5,
        marginVertical: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    toDoText: {
        fontSize: 18,
        color: "black",
        borderWidth:1,
        borderColor:"orange",
        borderRadius:12,
        margin:10,
    },
    deleteButton: {
        backgroundColor: "red",
        padding: 10,
        borderRadius: 5,
    },
    deleteButtonText: {
        color: "#fff",
    },
});

export default styles;