import { Stack, Tabs } from "expo-router";

export default function Layout() {
    return (
        <Stack>
            <Tabs.Screen name="principal" options={{headerShown: false}}/>
        </Stack>
    )
}