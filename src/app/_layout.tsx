
import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "AttendUMM",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="riwayat"
        options={{
          title: "Riwayat Presensi",
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="profil"
        options={{
          title: "Profil Mahasiswa",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
