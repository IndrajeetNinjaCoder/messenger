import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import {
    Pressable,
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    TextInput,
    Alert,
} from "react-native";
import axios from "axios";
import { HOST_NAME } from "@env"

const RegisterScreen = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("")
    const [image, setImage] = useState("")

    const navigation = useNavigation();

    const handleRegister = () => {
        const user = {
            name: name,
            email: email,
            password: password,
            image: image,
        };

        // send a POST  request to the backend API to register the user
        axios
            .post(`\${HOST_NAME}/register`, user)
            .then((response) => {
                console.log(response);
                Alert.alert(
                    "Registration successful",
                    "You have been registered Successfully"
                );
                setName("");
                setEmail("");
                setPassword("");
                setImage("");
            })
            .catch((error) => {
                Alert.alert(
                    "Registration Error",
                    "An error occurred while registering"
                );
                console.log("registration failed", error);
            });
    };




    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "white",
                padding: 10,
                alignItems: "center",
            }}>
            <KeyboardAvoidingView>
                <ScrollView>
                    <View
                        style={{
                            marginTop: 50,
                            justifyContent: "center",
                            alignItems: "center",
                        }}>
                        <Text style={{ color: "#4A55A2", fontSize: 17, fontWeight: "600" }}>
                            Register
                        </Text>

                        <Text style={{ fontSize: 17, fontWeight: "600", marginTop: 15 }}>
                            Register to Your Account now
                        </Text>
                    </View>

                    <View style={{ marginTop: 25 }}>


                        <View>
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                                Name
                            </Text>

                            <TextInput
                                value={name}
                                onChangeText={(text) => setName(text)}
                                style={{
                                    fontSize: name ? 18 : 18,
                                    borderBottomColor: "gray",
                                    borderBottomWidth: 1,
                                    width: 300,
                                    height: 40,
                                }}
                                placeholderTextColor={"black"}
                                placeholder="Enter Your Name"
                            />
                        </View>


                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                                Email
                            </Text>

                            <TextInput
                                value={email}
                                onChangeText={(text) => setEmail(text)}
                                style={{
                                    fontSize: email ? 18 : 18,
                                    borderBottomColor: "gray",
                                    borderBottomWidth: 1,
                                    width: 300,
                                    height: 40,
                                }}
                                placeholderTextColor={"black"}
                                placeholder="Enter Your Email"
                            />
                        </View>


                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                                Password
                            </Text>

                            <TextInput
                                value={password}
                                onChangeText={(text) => setPassword(text)}
                                secureTextEntry={true}
                                style={{
                                    fontSize: password ? 18 : 18,
                                    borderBottomColor: "gray",
                                    borderBottomWidth: 1,
                                    width: 300,
                                    height: 40,
                                }}
                                placeholderTextColor={"black"}
                                placeholder="Password"
                            />
                        </View>

                        <View style={{ marginTop: 25 }}>
                            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
                                Image
                            </Text>

                            <TextInput
                                value={image}
                                onChangeText={(text) => setImage(text)}
                                style={{
                                    fontSize: image ? 18 : 18,
                                    borderBottomColor: "gray",
                                    borderBottomWidth: 1,
                                    width: 300,
                                    height: 40,
                                }}
                                placeholderTextColor={"black"}
                                placeholder="Image"
                            />
                        </View>


                        <Pressable
                            onPress={handleRegister}
                            style={{
                                width: 200,
                                backgroundColor: "#4A55A2",
                                padding: 15,
                                marginTop: 50,
                                marginLeft: "auto",
                                marginRight: "auto",
                                borderRadius: 6,
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                }}
                            >
                                Register
                            </Text>
                        </Pressable>

                        <Pressable
                            onPress={() => navigation.goBack()}
                            style={{ marginTop: 15 }}
                        >
                            <Text style={{ textAlign: "center", color: "gray", fontSize: 16 }}>
                                Already Have an account? Sign in
                            </Text>
                        </Pressable>
                    </View>


                </ScrollView>
            </KeyboardAvoidingView>
        </View>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({})