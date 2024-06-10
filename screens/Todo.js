import { useState } from "react";
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

export const Todo = () => {
    const [todos, setTodos] = useState([]);

    return(
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <View style={styles.container}>
                <View style={styles.content}>
                    <AddTodo todos={ todos } setTodos={ setTodos } />
                    <TodoList todos={ todos } setTodos={ setTodos } />
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center"
    },
    content: {
        flex: 1
    }
})