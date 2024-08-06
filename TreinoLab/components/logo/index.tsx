import { Text, View, Button, StyleSheet } from 'react-native';
import Title from '@/components/Title';
import { Link } from "expo-router";

export default function Logo() {

    return (
        <View style={styles.container}>
            <Title/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 45,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.82)',
    },
});