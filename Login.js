import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function Login(props) {
    const { navigation } = props;

    const [selectedImage, setSelectedImage] = useState(null);

    const goToRegister = () => {
        navigation.navigate("Registro");
    }

    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.cancelled) {
                setSelectedImage(result.uri);
            }
        } catch (error) {
            console.error('Error al seleccionar una imagen:', error);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            
            <View style={styles.firstSection}>
                <Image 
                    source={{
                        uri: selectedImage || 'https://img.freepik.com/fotos-premium/quemar-rueda-coche-llamas-fuego-rueda-coche-ai-generativo_297535-4541.jpg?w=740',
                    }}
                    style={{ width: "100%", height: "140%", resizeMode: "cover" }}
                />  
            
                <View style={{ position: "absolute" }}>    
                    <Text style={styles.tittle}>Login</Text> 
                </View>

            </View>

            <View style={styles.secondSecction}>
                <View>
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Email address</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="green"
                            placeholder="ejemplo@ejemplo.com"
                            keyboardType='email-address'
                            returnKeyType='next'
                        />
                    </View>    
                
                    <View style={styles.spacing}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.textInput}
                            underlineColorAndroid="green"
                            placeholder="********"
                            secureTextEntry={true}
                        /> 
                    </View>

                    <View style={styles.spacing}>
                        <Text style={styles.ForgotPassword}>Forgot password?</Text>
                    </View>
                    
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Login</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Botón de selección de imagen */}
                    <View style={styles.spacing}>
                        <TouchableOpacity style={styles.button} onPress={pickImage}>
                            <Text style={styles.buttonText}>Seleccionar Imagen</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={[styles.spacing, styles.row]}>
                    <Text style={styles.label}>Don't have an account?</Text>
                    <TouchableOpacity onPress={goToRegister}>
                        <Text style={styles.signup}>Sign up</Text>
                    </TouchableOpacity>
                </View>
            
            </View>

      
        </SafeAreaView>
    );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
    },
    firstSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
        width: '100%',
    },
    secondSecction: {
        flex: 2,
        backgroundColor: 'white',
        width: '100%',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        padding: 20,
        justifyContent: "space-between"
    },
    tittle: {
        fontSize: 64,
        color: "white",
    },
    label: {
        color: "#000",
    },
    textInput: {
        color: "#000",
        padding: 8,
    },
    ForgotPassword: {
        color: "black",
        textAlign: 'right'
    },
    button: {
        backgroundColor: "#00A86B",
        padding: 15,
        borderRadius: 30,
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontWeight: "bold",
    },
    spacing: {
        marginTop: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "center",
    },
    signup: {
       color: "#00A86B",
       padding: 5, 
    }
});
