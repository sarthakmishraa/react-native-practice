import { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export const Counter = () => {
    const [counter, setCounter] = useState(0);

    const incCount = () => {
        setCounter(counter + 1);
    };
    const decCount = () => {
    setCounter(counter - 1);
    }
    
    return(
        <View>
            <Text style={styles.boldText}>{counter}</Text>
            <TouchableOpacity
            style={styles.button}
            onPress={incCount}
            >
            <Text>Increase Counter</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={styles.button}
            onPress={decCount}
            >
            <Text>Decrease Counter</Text>
            </TouchableOpacity>
            <TouchableOpacity 
            style={styles.button}
            onPress={() => setCounter(0)}
            >
            <Text>Reset Counter</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    boldText: {
        fontWeight: "bold",
        textAlign: "center"
    },
    button: {
        marginVertical: 10,
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
    }
});  