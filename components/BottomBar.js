import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Todo } from "../screens/Todo";
import { Reviews } from "../screens/Reviews";
import { Counter } from "../screens/Counter";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const BottomBar = () => {
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator screenOptions={{ tabBarStyle: styles.container, tabBarHideOnKeyboard: true }} >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarItemStyle: styles.barStyle,
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarIcon: (iconInfo) => (<MaterialIcons name="home" size={32} color={iconInfo.tintColor} />)
                }}
            />
            <Tab.Screen
                name="Todo"
                component={Todo}
                options={{
                    tabBarItemStyle: styles.barStyle,
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarIcon: (iconInfo) => (<FontAwesome5 name="tasks" size={24} color={iconInfo.tintColor} />)
                }}
            />
            <Tab.Screen
                name="Reviews"
                component={Reviews}
                options={{
                    tabBarItemStyle: styles.barStyle,
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarIcon: (iconInfo) => (<MaterialIcons name="reviews" size={28} color={iconInfo.tintColor} />)
                }}
            />
            <Tab.Screen
                name="Counter"
                component={Counter}
                options={{
                    tabBarItemStyle: styles.barStyle,
                    tabBarLabelStyle: styles.labelStyle,
                    tabBarIcon: (iconInfo) => (<MaterialCommunityIcons name="counter" size={32} color={iconInfo.tintColor} />)
                }}
            />
        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 54
    },
    barStyle: {
        borderStartWidth: 1,
        marginTop: 5
    },
    labelStyle: {
        fontWeight: "bold",
        fontSize: 12,
        marginTop: 5
    }
})