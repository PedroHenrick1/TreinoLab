import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}  />
      <Stack.Screen name="CreateUser" options={{ headerShown: false}} />
      <Stack.Screen name="CreateTreinos" options={{ headerShown: false}} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
