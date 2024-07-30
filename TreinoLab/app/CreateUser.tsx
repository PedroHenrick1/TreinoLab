import React from 'react';
import { Text, View, Button } from 'react-native';
import Main from '@/components/Main';
import { Link } from "expo-router";

export default function CreateUser() {

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Main />
            <Link href={"/"}>Ir para Página Principal"</Link>

            <Text>Teste</Text>
        </View>
    );
}