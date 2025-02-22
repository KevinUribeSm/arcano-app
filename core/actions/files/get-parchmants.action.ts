import * as FileSystem from "expo-file-system";
import { uploadApi } from "@/core/api/upload-api"
import { Alert } from "react-native";
import * as Sharing from 'expo-sharing';

const base = process.env.EXPO_PUBLIC_BASE_URL

export const getParchmants = async () => {
    try {
        const { data } = await uploadApi.get('/files')
        return data.files
    } catch (error) {
        console.log(error)
        throw 'Cannot read parchmants now'
    }
}

export const downloadParchmants = async (fileName: string) => {
    const uri = `${base}/uploads/${fileName}`;
    
    const fileUri = FileSystem.cacheDirectory + fileName; 
    const { uri: downloadedUri } = await FileSystem.downloadAsync(uri, fileUri);
    await Sharing.shareAsync(downloadedUri);
}
