import { useRouter } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

export default function Riwayat() {
  const router = useRouter();

  function handleBack() {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.replace("/");
    }
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>Riwayat Presensi</Text>

        <Text style={styles.subtitle}>Riwayat kehadiran mahasiswa</Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Daftar Riwayat</Text>

        <View style={styles.historyRow}>
          <View>
            <Text style={styles.historySubject}>Prak Pemrograman Web</Text>
            <Text style={styles.nim}>Pertemuan 1</Text>
          </View>

          <Text
            style={{
              color: "#3F7D58",
              fontWeight: "bold",
            }}
          >
            Hadir
          </Text>
        </View>

        <View style={styles.historyRow}>
          <View>
            <Text style={styles.historySubject}>Piranti Cerdas B</Text>
            <Text style={styles.nim}>Pertemuan 1</Text>
          </View>

          <Text
            style={{
              color: "#3F7D58",
              fontWeight: "bold",
            }}
          >
            Hadir
          </Text>
        </View>

        <View style={styles.historyRow}>
          <View>
            <Text style={styles.historySubject}>Pemrograman Fungsional E</Text>
            <Text style={styles.nim}>Pertemuan 1</Text>
          </View>

          <Text
            style={{
              color: "#3F7D58",
              fontWeight: "bold",
            }}
          >
            Hadir
          </Text>
        </View>

        <Pressable style={styles.attendanceButton} onPress={handleBack}>
          <Text style={styles.attendanceButtonText}>KEMBALI</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
