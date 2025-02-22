import Title from "@/components/Title"
import { Colors } from "@/constants/Colors"
import { Alert, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native"
import * as DocumentPicker from 'expo-document-picker';
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

const UploadScreen = () => {
    const pickDocument = async () => {
        try {
            const res = await DocumentPicker.getDocumentAsync({
                type: 'application/pdf',
                multiple: false
            })

            const formData = new FormData()
            const assets = res.assets
            if (!assets) return

            const file = assets[0]
            const filePicked = {
                name: file.name,
                uri: file.uri,
                type: file.mimeType,
                size: file.size
            }

            formData.append('file', filePicked as any)

            await axios.post('https://upload-files-ocn9.onrender.com/upload', formData, {
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'multipart/form-data'
                }
            })

            Alert.alert("¡Éxito!", "El archivo se ha subido correctamente.");
        } catch (error) {
            console.log(error)
            Alert.alert("Error", "Hubo un problema al subir el archivo.");
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background, paddingTop: 32 }}>
            <Title text="Subir pergaminos 🧙🏼‍♂️" />
            <View style={styles.container}>
                <Pressable style={styles.button} onPress={pickDocument}>
                    <View style={styles.textIcon}>
                        <Text style={styles.buttonText}>Sube tu hechizo</Text>
                        <Ionicons size={28} name="arrow-up-circle-outline" color={'white'} />
                    </View>
                </Pressable>

                <View style={styles.textIcon}>
                    <Text style={{ fontSize: 12 }}>Sólo puedes subir hechizos en formato pdf</Text>
                    <Ionicons size={24} name="alert-circle-outline" color={'red'} />
                </View>
            </View>
        </SafeAreaView >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 100
    },
    button: {
        marginBottom: 40,
        backgroundColor: '#4b55a3',
        padding: 24,
        borderRadius: 16
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    },
    textIcon: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 4
    }
});


export default UploadScreen
