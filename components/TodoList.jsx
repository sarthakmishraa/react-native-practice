import { View, StyleSheet, FlatList, TouchableOpacity, Text, Alert } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export const TodoList = (props) => {
    const deleteTodo = (todoId) => {
        const todo = props.todos.find((todo) => todo.todoId === todoId)
        Alert.alert("Are you sure ?", `Delete Todo: ${todo.todo}`, [
            {
                text: "No"
            },
            {
                text: "Yes",
                onPress: () => props.setTodos((prevTodos) => prevTodos.filter((todo) => todo.todoId !== todoId))
            }
        ])
    }

    return(
        <View style={styles.todos}>
            {
                <FlatList
                    data={props.todos}
                    keyExtractor={(todo) => todo.todoId}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            onPress={() => deleteTodo(item.todoId)}
                        >
                            <View style={styles.todo}>
                                <MaterialIcons name="delete" size={24} color="gray" />
                                <Text style={styles.todoText}>{ item.todo }</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    todos: {
        flex: 1,
        paddingHorizontal: 20
    },
    todo: {
        marginVertical: 5,
        padding: 20,
        borderRadius: 10,
        borderColor: "black",
        borderWidth: 1,
        borderStyle: "dashed",
        flexDirection: "row"
    },
    todoText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: "semibold",
    }
})