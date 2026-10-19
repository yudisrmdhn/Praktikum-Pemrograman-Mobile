import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";

export default function Login() {
  const router = useRouter();

  const [nim, setNim] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleLogin() {
    if (nim.trim() === "" || password === "") {
      Alert.alert("Login Gagal", "NIM dan password wajib diisi.");
      return;
    }

    router.replace("/dashboard" as any);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: "#F7F4EF" }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          padding: 24,
        }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={{ alignItems: "center", marginBottom: 32 }}>
          <View
            style={{
              width: 76,
              height: 76,
              borderRadius: 22,
              backgroundColor: "#C62828",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 16,
            }}
          >
            <Text style={{ fontSize: 34, color: "white" }}>A</Text>
          </View>

          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              color: "#7F1D1D",
            }}
          >
            AttendUMM
          </Text>

          <Text
            style={{
              fontSize: 14,
              color: "#7A6F68",
              marginTop: 8,
              textAlign: "center",
            }}
          >
            Aplikasi Presensi Mahasiswa UMM
          </Text>
        </View>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            padding: 24,
          }}
        >
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              color: "#3F342E",
              marginBottom: 8,
            }}
          >
            Selamat Datang!
          </Text>

          <Text
            style={{
              color: "#7A6F68",
              marginBottom: 24,
            }}
          >
            Silakan login untuk melanjutkan.
          </Text>

          <Text style={labelStyle}>NIM Mahasiswa</Text>

          <TextInput
            value={nim}
            onChangeText={setNim}
            placeholder="Masukkan NIM"
            placeholderTextColor="#A69B93"
            keyboardType="number-pad"
            autoCapitalize="none"
            style={inputStyle}
          />

          <Text style={labelStyle}>Password</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#D8D2CC",
              borderRadius: 10,
              marginBottom: 22,
              paddingRight: 12,
            }}
          >
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Masukkan password"
              placeholderTextColor="#A69B93"
              secureTextEntry={!showPassword}
              style={{
                flex: 1,
                padding: 14,
                color: "#3F342E",
              }}
            />

            <Pressable onPress={() => setShowPassword(!showPassword)}>
              <Text
                style={{
                  color: "#3F7D58",
                  fontWeight: "bold",
                }}
              >
                {showPassword ? "Sembunyikan" : "Lihat"}
              </Text>
            </Pressable>
          </View>

          <Pressable
            onPress={handleLogin}
            style={{
              backgroundColor: "#3F7D58",
              padding: 16,
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              LOGIN
            </Text>
          </Pressable>

          <Text
            style={{
              textAlign: "center",
              marginTop: 20,
              color: "#7A6F68",
              fontSize: 12,
            }}
          >
            AttendUMM · Informatika UMM
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const labelStyle = {
  fontSize: 14,
  fontWeight: "bold" as const,
  color: "#4A403B",
  marginBottom: 8,
};

const inputStyle = {
  borderWidth: 1,
  borderColor: "#D8D2CC",
  borderRadius: 10,
  padding: 14,
  marginBottom: 18,
  color: "#3F342E",
};
