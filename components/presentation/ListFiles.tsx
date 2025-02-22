import { FlatList, Text, View } from "react-native"
import FileItem from "./FileItem"

interface Props {
    files: string[]
}

const ListFiles = ({ files }: Props) => {
    
    return (
        <View>
            <FlatList
                data={files}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => <FileItem fileName={item} />}
            />
        </View>
    )
}


export default ListFiles
