import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="dashboard"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="profil"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="riwayat"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
