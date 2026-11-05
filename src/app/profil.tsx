
import { useLocalSearchParams, useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export default function Profil() {
  const router = useRouter();

  const { nama, nim, prodi } = useLocalSearchParams<{
    nama: string;
    nim: string;
    prodi: string;
  }>();

  function handleBack() {
    router.back();
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
          {nama || "Nama Mahasiswa"}
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
