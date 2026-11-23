
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";
import { useRouter } from "expo-router";
import { supabase } from "../services/supabase";
import { styles } from "./styles";

export default function Profil() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [prodi, setProdi] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      try {
        const { data, error } = await supabase.auth.getUser();

        if (error) {
          throw error;
        }

        const user = data.user;

        if (!user) {
          throw new Error("Pengguna belum login.");
        }

        const metadata = user.user_metadata ?? {};

        setNama(metadata.nama ?? "");
        setNim(metadata.nim ?? "");
        setProdi(metadata.prodi ?? "");
      } catch (error) {
        Alert.alert(
          "Gagal Memuat Profil",
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan."
        );
      } finally {
        setLoading(false);
      }
    }

    loadProfile();
  }, []);

  function handleBack() {
    router.back();
  }

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#3F7D58" />
        <Text style={styles.nim}>Memuat profil...</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Profil Mahasiswa</Text>
        <Text style={styles.subtitle}>
          Informasi mahasiswa AttendUMM
        </Text>
      </View>

      {/* INFORMASI MAHASISWA */}
      <View style={styles.studentCard}>
        <Text style={styles.label}>Nama Mahasiswa</Text>

        <Text style={styles.profileName}>
          {nama || "Nama belum tersedia"}
        </Text>

        <Text style={styles.nim}>
          NIM: {nim || "-"}
        </Text>

        <Text style={styles.nim}>
          Program Studi: {prodi || "-"}
        </Text>

        <Text style={styles.nim}>
          Universitas Muhammadiyah Malang
        </Text>
      </View>

      {/* TENTANG APLIKASI */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>
          Tentang Aplikasi
        </Text>

        <Text style={styles.nim}>
          AttendUMM merupakan aplikasi presensi mahasiswa
          untuk melihat jadwal, melakukan presensi, dan
          memantau riwayat kehadiran.
        </Text>
      </View>

      {/* TOMBOL KEMBALI */}
      <View style={styles.courseCard}>
        <Pressable
          style={styles.attendanceButton}
          onPress={handleBack}
        >
          <Text style={styles.attendanceButtonText}>
            KEMBALI KE DASHBOARD
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
