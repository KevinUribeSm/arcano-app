import { Colors } from '@/constants/Colors';
import { useFiles } from '@/hooks/useFiles';
import { Ionicons } from '@expo/vector-icons';
import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
    fileName: string;
}

const FileItem = ({ fileName }: Props) => {
    const { downloadParchmants } = useFiles()

    return (
        <View style={styles.container}>
            <Text style={styles.text}>{fileName.split('-').slice(1).join('-')}</Text>
            <TouchableOpacity  onPress={() => downloadParchmants(fileName)}>
                <Ionicons size={28} name="download-outline" color={Colors.light.icon} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 8,
        justifyContent: 'space-between',
    },
    text: {
        width: '95%',
        fontSize: 12,
    },
})

export default FileItem
