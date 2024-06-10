import { useState, useRef } from "react";
import { TouchableWithoutFeedback, View, TextInput, TouchableOpacity, Text, StyleSheet, Keyboard, Alert } from "react-native";

export const AddTodo = (props) => {
    const [todo, setTodo] = useState("");

    const textInputRef = useRef();

    const generateTodoId = () => {
        const chars = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
        const length = 3;
        let todoId = "";
        
        for (let i=0; i<length; i++) {
            const index = Math.floor(Math.random() * chars.length);
            todoId += chars[index];
        }
        return todoId;
    }

    const addTodo = () => {
        if(todo.length === 0) {
            Alert.alert("Empty todo", "Todo cannot be empty");
        }
        else if(todo.length > 3) {
            props.setTodos((prevTodos) => ([...prevTodos, {todo: todo, todoId: generateTodoId()}]));
            textInputRef.current.clear();
            setTodo("");
        }
        else {
            Alert.alert("Sorry, cannot add this todo", "Todo must be of more than three characters");
        }
    };

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <View style={styles.addTodo}>
                <TextInput
                    style={styles.input}
                    onChangeText={(value) => setTodo(value)}
                    placeholder="Enter Todo Here"
                    ref={textInputRef}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={addTodo}
                >
                    <Text style={styles.buttonText}>Add Todo</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    addTodo: {
        paddingTop: 80,
        paddingHorizontal: 80
    },
    input: {
        paddingTop: 40,
        textAlign: "center",
        fontSize: 20,
        borderBottomColor: "gray",
        borderBottomWidth: 1
    },
    button: {
        marginVertical: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 8,
    },
    buttonText: {
        fontWeight: "bold",
        fontSize: 20,
        textAlign: "center",
    },
})