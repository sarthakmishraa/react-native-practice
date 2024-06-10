import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, StatusBar, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [nameEntered, setNameEntered] = useState(false);

    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Counter")}
            >
                <Text>Counter</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Reviews")}
            >
                <Text>Reviews</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Todo")}
            >
                <Text>Todo</Text>
            </TouchableOpacity>

            {
            nameEntered? (
                <Text>Hi {name}</Text>
            ):(
                <View>
                <TextInput
                    style={styles.input}
                    placeholder="Enter your name"
                    onChangeText={(value) => setName(value)}
                />
                <Button
                    title="Enter"
                    onPress={() => setNameEntered(true)}
                />
                </View>
            )
            }
            <StatusBar
                backgroundColor="orange"
                barStyle="light-content"
                hidden={false}
                translucent={false}
                animated={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingTop: 40
    },
    boldText: {
        fontWeight: "bold"
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        margin: 10,
        width: 200
    },
    button: {
        marginVertical: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
    },
});  