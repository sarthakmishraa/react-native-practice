import { StyleSheet, TouchableOpacity, FlatList, Alert, Text } from "react-native";

export const Reviews = () => {
    const reviews = [{
        reviewId: 1,
        review: "Great laptop, battery lasts for 4-6 hours and 16 GB RAM model is enough for gaming.",
        product: "Asus TUF Gaming A16"
    },
    {
        reviewId: 2,
        review: "Great keyboard, click sound and RGB lights enhance UX",
        product: "EVGA RGB Keyboard"
    },
    {
        reviewId: 3,
        review: "Great monitor, can rotate on a round axis",
        product: "HP 24 inch monitor"
    },
    {
        reviewId: 4,
        review: "Excellent camera quality, perfect for capturing detailed shots in low light conditions.",
        product: "Canon EOS R5"
    },
    {
        reviewId: 5,
        review: "Amazing sound quality and noise cancellation feature, perfect for music lovers and frequent travelers.",
        product: "Sony WH-1000XM4 headphones"
    },
    {
        reviewId: 6,
        review: "Outstanding performance, handles multitasking effortlessly and boots up in seconds.",
        product: "Dell XPS 13 laptop"
    },
    {
        reviewId: 7,
        review: "Impressive battery life, lasts for more than 10 hours with continuous usage.",
        product: "Apple iPad Pro"
    },
    {
        reviewId: 8,
        review: "Superb build quality, feels solid and durable in hand.",
        product: "Samsung Galaxy S21 Ultra"
    },
    {
        reviewId: 9,
        review: "Fantastic graphics capability, delivers stunning visuals even in high-demand games.",
        product: "NVIDIA GeForce RTX 3080 GPU"
    },
    {
        reviewId: 10,
        review: "Exceptional heat dissipation, keeps the device cool even during intense gaming sessions.",
        product: "Corsair Hydro Series CPU cooler"
    },
    {
        reviewId: 11,
        review: "Brilliant display with vibrant colors and deep blacks, perfect for watching movies and gaming.",
        product: "LG OLED C1 TV"
    },
    {
        reviewId: 12,
        review: "Incredible typing experience, keys are tactile and responsive, making typing a breeze.",
        product: "Logitech G Pro Mechanical Keyboard"
    },
    {
        reviewId: 13,
        review: "Remarkable durability, withstands accidental drops and spills without any damage.",
        product: "OtterBox Defender Series Phone Case"
    }];

    const seeReview = (product, review) => {
        return (
            Alert.alert(product, review)
        )
    }
    return(
        <FlatList
            style={styles.container}
            keyExtractor={(review) => review.reviewId}
            data={reviews}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => seeReview(item.product, item.review)}>
                    <Text style={styles.reviews}>{ item.product }</Text>
                </TouchableOpacity>
            )}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20
    },
    reviews: {
        fontSize: 20,
        padding: 20,
        marginTop: 20,
        fontWeight: "semibold",
        backgroundColor: "orange",
    }
})