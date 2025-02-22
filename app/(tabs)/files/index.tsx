import Title from "@/components/Title"
import ListFiles from "@/components/presentation/ListFiles"
import { Colors } from "@/constants/Colors"
import { useFiles } from "@/hooks/useFiles"
import { useFocusEffect } from "expo-router"
import { useCallback } from "react"
import { ActivityIndicator, SafeAreaView, Text, View } from "react-native"

const FilesScreen = () => {
  const { parchmantsbyMages, isLoading, refetch } = useFiles()
  const files = parchmantsbyMages.data

  useFocusEffect(
    useCallback(() => {
      refetch()
    }, [])
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background, paddingTop: 32 }}>
      <Title text='Lista de pergaminos 📜' />
      {isLoading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color={Colors.light.icon} />
        </View>
      ) : (
        <ListFiles files={files} />
      )}
    </SafeAreaView>
  )
}

export default FilesScreen
