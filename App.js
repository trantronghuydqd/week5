import React, {useState, useEffect} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Hình ảnh sản phẩm */}
            <Image
                source={{
                    uri: "data:image/jpeg;base64,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",
                }} // Thay bằng đường dẫn thực tế của hình ảnh
                style={styles.productImage}
            />

            {/* Tên sản phẩm */}
            <Text style={styles.productName}>
                Điện Thoại Vsmart Joy 3 - Hàng chính hãng
            </Text>

            {/* Giá bán */}
            <Text style={styles.salePrice}>1.790.000 ₫</Text>

            {/* Nút chọn màu */}
            <TouchableOpacity
                style={styles.colorButton}
                onPress={() => navigation.navigate("Chọn Màu")}
            >
                <Text style={styles.colorButtonText}>4 MÀU - CHỌN LOẠI</Text>
            </TouchableOpacity>

            {/* Nút mua */}
            <TouchableOpacity style={styles.buyButton}>
                <Text style={styles.buyButtonText}>CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    );
}

function ColorSelectionScreen({ navigation }) {
    const [selectedColor, setSelectedColor] = useState(null);

    return (
        <View style={styles.container}>
            {/* Hình ảnh và thông tin sản phẩm */}
            <View style={styles.productInfo}>
                <Image
                    source={{
                        uri: "data:image/jpeg;base64,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",
                    }} // Thay bằng đường dẫn thực tế
                    style={styles.productImageSmall}
                />
                <View>
                    <Text style={styles.productName}>
                        Điện Thoại Vsmart Joy 3 - Hàng chính hãng
                    </Text>
                    <Text style={styles.selectedColor}>
                        Màu: {selectedColor || "chưa chọn"}
                    </Text>
                    <Text style={styles.supplier}>
                        Cung cấp bởi Tiki Tradding
                    </Text>
                    <Text style={styles.salePrice}>1.790.000 ₫</Text>
                </View>
            </View>

            {/* Hướng dẫn chọn màu */}
            <Text style={styles.chooseColorText}>Chọn một màu bên dưới:</Text>

            {/* Các ô chọn màu */}
            <View style={styles.colorOptions}>
                {["#b3e5fc", "#ff1744", "#000000", "#0d47a1"].map((color) => (
                    <TouchableOpacity
                        key={color}
                        style={[styles.colorBox, { backgroundColor: color }]}
                        onPress={() =>
                            setSelectedColor(
                                color === "#b3e5fc"
                                    ? "xanh nhạt"
                                    : color === "#ff1744"
                                    ? "đỏ"
                                    : color === "#000000"
                                    ? "đen"
                                    : "xanh dương"
                            )
                        }
                    />
                ))}
            </View>

            {/* Nút XONG */}
            <TouchableOpacity
                style={styles.doneButton}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.doneButtonText}>XONG</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
        alignItems: "center",
    },
    productImage: {
        width: 200,
        height: 400,
        resizeMode: "contain",
    },
    productImageSmall: {
        width: 80,
        height: 160,
        resizeMode: "contain",
    },
    productName: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 8,
    },
    salePrice: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#d32f2f",
    },
    supplier: {
        fontSize: 14,
        color: "#666",
    },
    selectedColor: {
        fontSize: 14,
        color: "#d32f2f",
        fontWeight: "bold",
    },
    colorButton: {
        backgroundColor: "#f0f0f0",
        padding: 10,
        marginTop: 16,
        width: "80%",
        alignItems: "center",
        borderRadius: 8,
    },
    colorButtonText: {
        fontSize: 14,
        color: "#333",
    },
    productInfo: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    chooseColorText: {
        fontSize: 16,
        marginBottom: 8,
    },
    colorOptions: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    colorBox: {
        width: 50,
        height: 50,
        marginVertical: 8,
    },
    doneButton: {
        backgroundColor: "#1976d2",
        padding: 10,
        width: "80%",
        alignItems: "center",
        borderRadius: 8,
        marginTop: 16,
    },
    doneButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    buyButton: {
        backgroundColor: "#d32f2f",
        padding: 12,
        marginTop: 16,
        width: "80%",
        alignItems: "center",
        borderRadius: 8,
    },
    buyButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen
                    name="Chọn Màu"
                    component={ColorSelectionScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
