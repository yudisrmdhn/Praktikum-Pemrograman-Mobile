import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { styles } from "./styles";

interface Student {
  name: string;
  nim: string;
  isPresent: boolean;
}

interface Attendance {
  id: number;
  subject: string;
  meeting: string;
  status: "Hadir" | "Belum Presensi";
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

const attendanceData: Attendance[] = [
  {
    id: 1,
    subject: "Pemrograman Mobile",
    meeting: "Pertemuan 1",
    status: "Hadir",
  },
  {
    id: 2,
    subject: "Basis Data",
    meeting: "Pertemuan 1",
    status: "Hadir",
  },
  {
    id: 3,
    subject: "Pemrograman Fungsional",
    meeting: "Pertemuan 1",
    status: "Hadir",
  },
];

function getAttendanceStatus(isPresent: boolean): string {
  if (isPresent) {
    return "Hadir";
  }

  return "Belum Presensi";
}

function getTotalPresent(): number {
  return students.filter((student) => student.isPresent).length;
}

function getAttendancePercentage(): number {
  const total = students.length;
  const present = getTotalPresent();

  return Math.round((present / total) * 100);
}

export default function Index() {
  const [isPresent, setIsPresent] = useState(false);

  function handleAttendance() {
    setIsPresent(true);
  }

  return (
    <ScrollView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>AttendUMM</Text>

        <Text style={styles.subtitle}>
          Aplikasi Presensi Mahasiswa UMM
        </Text>
      </View>

      {/* DATA MAHASISWA */}
      <View style={styles.studentCard}>
        <Text style={styles.label}>Mahasiswa</Text>

        <Text style={styles.profileName}>
          Gagah Yudhistira Ramadhan
        </Text>

        <Text style={styles.nim}>
          NIM: 202410370110323
        </Text>

        <Text style={styles.nim}>
          Program Studi: Informatika
        </Text>
      </View>

      {/* RINGKASAN */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Ringkasan Presensi
        </Text>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>
              {getTotalPresent()}
            </Text>

            <Text style={styles.summaryLabel}>
              Hadir
            </Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>
              {students.length - getTotalPresent()}
            </Text>

            <Text style={styles.summaryLabel}>
              Belum
            </Text>
          </View>
        </View>

        <View style={styles.percentageCard}>
          <Text style={styles.percentageLabel}>
            Persentase Kehadiran
          </Text>

          {/* INLINE STYLE */}
          <Text
            style={{
              fontSize: 32,
              fontWeight: "bold",
              color: "#3F7D58",
              marginTop: 5,
            }}
          >
            {getAttendancePercentage()}%
          </Text>
        </View>
      </View>

      {/* PRESENSI HARI INI */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>
          Presensi Hari Ini
        </Text>

        <Text style={styles.todaySubject}>
          Pemrograman Mobile
        </Text>

        <Text style={styles.nim}>
          Pertemuan 1
        </Text>

        <Text
          style={[
            styles.status,
            {
              color: isPresent ? "#3F7D58" : "#B35C44",
            },
          ]}
        >
          Status: {getAttendanceStatus(isPresent)}
        </Text>

        <Pressable
          style={styles.attendanceButton}
          onPress={handleAttendance}
        >
          <Text style={styles.attendanceButtonText}>
            {isPresent ? "✓ SUDAH PRESENSI" : "PRESENSI SEKARANG"}
          </Text>
        </Pressable>
      </View>

      {/* DAFTAR ANGGOTA */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>
          Daftar Mahasiswa
        </Text>

        {students.map((student) => (
          <View
            key={student.nim}
            style={styles.studentRow}
          >
            <Text style={styles.studentRowName}>
              {student.name}
            </Text>

            <Text style={styles.nim}>
              {student.nim}
            </Text>

            <Text
              style={[
                styles.status,
                {
                  color: student.isPresent
                    ? "#3F7D58"
                    : "#B35C44",
                },
              ]}
            >
              Status: {getAttendanceStatus(student.isPresent)}
            </Text>
          </View>
        ))}
      </View>

      {/* RIWAYAT */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>
          Riwayat Presensi
        </Text>

        {attendanceData.map((attendance) => (
          <View
            key={attendance.id}
            style={styles.historyRow}
          >
            <View>
              <Text style={styles.historySubject}>
                {attendance.subject}
              </Text>

              <Text style={styles.nim}>
                {attendance.meeting}
              </Text>
            </View>

            <Text
              style={{
                color:
                  attendance.status === "Hadir"
                    ? "#3F7D58"
                    : "#B35C44",
                fontWeight: "bold",
              }}
            >
              {attendance.status}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}