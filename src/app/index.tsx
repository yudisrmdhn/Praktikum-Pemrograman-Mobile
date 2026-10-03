import { ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

interface Student {
  name: string;
  nim: string;
  isPresent: boolean;
}

const students: Student[] = [
  {
    name: "Salzabilla Aurelia Maheswari",
    nim: "202410370110283",
    isPresent: true,
  },
  {
    name: "Putri Nurnikmatus Suharnani",
    nim: "202410370110292",
    isPresent: true,
  },
  {
    name: "Gagah Yudhistira Ramadhan",
    nim: "202410370110323",
    isPresent: true,
  },
];

function getAttendanceStatus(isPresent: boolean): string {
  if (isPresent) {
    return "Hadir";
  } else {
    return "Belum Presensi";
  }
}

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>AttendUMM</Text>

        <Text style={styles.subtitle}>Aplikasi Presensi Mahasiswa UMM</Text>
      </View>

      <View style={styles.studentCard}>
        <Text style={styles.label}>Mahasiswa</Text>

        <Text style={styles.profileName}>Gagah Yudhistira Ramadhan</Text>

        <Text style={styles.nim}>NIM: 202410370110323</Text>
      </View>

      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Pemrograman Mobile</Text>

        {students.map((student) => (
          <View key={student.nim} style={styles.studentRow}>
            <Text style={styles.studentRowName}>{student.name}</Text>

            <Text style={styles.nim}>{student.nim}</Text>

            <Text
              style={[
                styles.status,
                {
                  color: student.isPresent ? "#3F7D58" : "#B35C44",
                },
              ]}
            >
              Status: {getAttendanceStatus(student.isPresent)}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
