import { Colors } from '@/constants/Colors';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

interface Props {
    text: string;
}

const Title = ({ text }: Props) => {
    return (
        <Text style={styles.text}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    text: {
        color: Colors.light.text,
        fontFamily: 'DancingBold',
        fontSize: 36,
        marginVertical: 12,
        textAlign: 'center',
    },
});

export default Title;
