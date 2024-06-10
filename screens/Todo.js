import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";

export const Todo = () => {
    const [todos, setTodos] = useState([]);

    return(
        <View style={styles.container}>
            <AddTodo todos={ todos } setTodos={ setTodos } />
            <TodoList todos={ todos } setTodos={ setTodos } />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center"
    },
})