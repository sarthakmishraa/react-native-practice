import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, StatusBar, TouchableOpacity } from "react-native";

export const Home = ({ navigation }) => {
    const [name, setName] = useState(null);
    const [nameEntered, setNameEntered] = useState(false);

    return(
        <View style={styles.container}>
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
});  