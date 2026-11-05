import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { getStudents, type Student as ApiStudent } from "../services/api";
import { styles } from "./styles";

type AttendanceStatus = "Hadir" | "Izin" | "Alpha";

interface Student {
  name: string;
  nim: string;
  status: AttendanceStatus;
}

interface Attendance {
  id: number;
  subject: string;
  meeting: string;
  status: AttendanceStatus;
}

interface Course {
  id: number;
  day: string;
  name: string;
}

const students: Student[] = [
  {
    name: "Salzabilla Aurelia Maheswari",
    nim: "202410370110283",
    status: "Hadir",
  },
  {
    name: "Putri Nurnikmatus Suharnani",
    nim: "202410370110292",
    status: "Hadir",
  },
  {
    name: "Gagah Yudhistira Ramadhan",
    nim: "202410370110323",
    status: "Izin",
  },
];

const attendanceData: Attendance[] = [
  {
    id: 1,
    subject: "Prak Pemrograman Web",
    meeting: "Pertemuan 1",
    status: "Hadir",
  },
  {
    id: 2,
    subject: "Piranti Cerdas B",
    meeting: "Pertemuan 1",
    status: "Hadir",
  },
  {
    id: 3,
    subject: "Pemrograman Fungsional E",
    meeting: "Pertemuan 1",
    status: "Hadir",
  },
];

const courses: Course[] = [
  { id: 1, day: "Senin", name: "Prak Pemrograman Web" },
  { id: 2, day: "Senin", name: "Piranti Cerdas B" },
  { id: 3, day: "Senin", name: "Pemrograman Fungsional E" },
  { id: 4, day: "Senin", name: "Prak Pemrograman Fungsional" },
  { id: 5, day: "Selasa", name: "Pemrograman Mobile C" },
  { id: 6, day: "Selasa", name: "Prak Pemrograman Mobile" },
  { id: 7, day: "Selasa", name: "Metopen E" },
  { id: 8, day: "Rabu", name: "Pemrograman Web D" },
  { id: 9, day: "Rabu", name: "Pengantar Game B" },
  { id: 10, day: "Kamis", name: "Etika & Profesi I" },
];

const days = ["Senin", "Selasa", "Rabu", "Kamis"];

function getTotalPresent() {
  return students.filter((student) => student.status === "Hadir").length;
}

function getTotalStatus(status: AttendanceStatus) {
  return students.filter((student) => student.status === status).length;
}

function getAttendancePercentage() {
  return students.length === 0
    ? 0
    : Math.round((getTotalPresent() / students.length) * 100);
}

function getStatusColor(status: AttendanceStatus) {
  switch (status) {
    case "Hadir":
      return "#3F7D58";
    case "Izin":
      return "#C28A32";
    case "Alpha":
      return "#B35C44";
  }
}

export default function Index() {
  const router = useRouter();

  const [selectedDay, setSelectedDay] = useState("Senin");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isPresent, setIsPresent] = useState(false);

  const [showStudents, setShowStudents] = useState(false);
  const [showApiStudents, setShowApiStudents] = useState(false);

  const [apiStudents, setApiStudents] = useState<ApiStudent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStudents() {
      try {
        const data = await getStudents();
        setApiStudents(data);
      } catch (error) {
        console.log("Gagal mengambil data:", error);
      } finally {
        setLoading(false);
      }
    }

    loadStudents();
  }, []);

  const coursesByDay = courses.filter((course) => course.day === selectedDay);

  function handleDaySelect(day: string) {
    setSelectedDay(day);
    setSelectedCourse("");
    setIsPresent(false);
  }

  function handleCourseSelect(courseName: string) {
    setSelectedCourse(courseName);
    setIsPresent(false);
  }

  function handleAttendance() {
    if (selectedCourse !== "") {
      setIsPresent(true);
    }
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>AttendUMM</Text>
        <Text style={styles.subtitle}>Aplikasi Presensi Mahasiswa UMM</Text>
      </View>

      {/* PROFIL MAHASISWA */}
      <View style={styles.studentCard}>
        <Text style={styles.label}>Mahasiswa</Text>
        <Text style={styles.profileName}>Gagah Yudhistira Ramadhan</Text>
        <Text style={styles.nim}>NIM: 202410370110323</Text>
        <Text style={styles.nim}>Program Studi: Informatika</Text>
      </View>

      {/* RINGKASAN PRESENSI */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ringkasan Presensi</Text>

        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>{getTotalPresent()}</Text>
            <Text style={styles.summaryLabel}>Hadir</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>{getTotalStatus("Izin")}</Text>
            <Text style={styles.summaryLabel}>Izin</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryNumber}>{getTotalStatus("Alpha")}</Text>
            <Text style={styles.summaryLabel}>Alpha</Text>
          </View>
        </View>

        <View style={styles.percentageCard}>
          <Text style={styles.percentageLabel}>Persentase Kehadiran</Text>
          <Text style={styles.percentageNumber}>
            {getAttendancePercentage()}%
          </Text>
        </View>
      </View>

      {/* JADWAL DAN PRESENSI */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Pilih Jadwal Presensi</Text>

        <Text style={styles.selectLabel}>Pilih Hari</Text>

        <View style={styles.dayContainer}>
          {days.map((day) => (
            <Pressable
              key={day}
              style={[
                styles.dayButton,
                selectedDay === day && styles.selectedDayButton,
              ]}
              onPress={() => handleDaySelect(day)}
            >
              <Text
                style={[
                  styles.dayButtonText,
                  selectedDay === day && styles.selectedDayButtonText,
                ]}
              >
                {day}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.selectLabel}>Mata Kuliah Hari {selectedDay}</Text>

        {coursesByDay.length === 0 ? (
          <Text style={styles.nim}>Tidak ada jadwal kuliah pada hari ini.</Text>
        ) : (
          coursesByDay.map((course) => (
            <Pressable
              key={course.id}
              style={[
                styles.courseOption,
                selectedCourse === course.name && styles.selectedCourse,
              ]}
              onPress={() => handleCourseSelect(course.name)}
            >
              <Text
                style={[
                  styles.courseOptionText,
                  selectedCourse === course.name && styles.selectedCourseText,
                ]}
              >
                {course.name}
              </Text>
            </Pressable>
          ))
        )}

        {selectedCourse !== "" && (
          <View style={styles.presenceBox}>
            <Text style={styles.selectedSubject}>{selectedCourse}</Text>

            <Text style={styles.nim}>Pertemuan 1</Text>

            <View style={styles.presenceStatusRow}>
              <Text style={styles.statusLabel}>Status Presensi</Text>
              <Text
                style={[
                  styles.presenceStatus,
                  {
                    color: isPresent ? "#3F7D58" : "#B35C44",
                  },
                ]}
              >
                {isPresent ? "Hadir" : "Belum Presensi"}
              </Text>
            </View>

            <Pressable
              style={[
                styles.attendanceButton,
                isPresent && styles.disabledAttendanceButton,
              ]}
              onPress={handleAttendance}
              disabled={isPresent}
            >
              <Text style={styles.attendanceButtonText}>
                {isPresent ? "✓ SUDAH PRESENSI" : "PRESENSI SEKARANG"}
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* DAFTAR MAHASISWA UMM */}
      <View style={styles.courseCard}>
        <Pressable
          style={styles.dropdownHeader}
          onPress={() => setShowStudents(!showStudents)}
        >
          <Text style={styles.courseTitle}>Daftar Mahasiswa UMM</Text>

          <Text style={styles.dropdownIcon}>{showStudents ? "▲" : "▼"}</Text>
        </Pressable>

        {showStudents && (
          <View style={styles.tableContainer}>
            <View style={styles.tableHeader}>
              <Text style={[styles.tableHeaderText, styles.nameColumn]}>
                Nama Mahasiswa
              </Text>
              <Text style={[styles.tableHeaderText, styles.nimColumn]}>
                NIM
              </Text>
              <Text style={[styles.tableHeaderText, styles.statusColumn]}>
                Status
              </Text>
            </View>

            {students.map((student) => (
              <View key={student.nim} style={styles.tableRow}>
                <Text
                  style={[styles.tableName, styles.nameColumn]}
                  numberOfLines={2}
                >
                  {student.name}
                </Text>

                <Text
                  style={[styles.tableNim, styles.nimColumn]}
                  numberOfLines={2}
                >
                  {student.nim}
                </Text>

                <View style={[styles.statusColumn, styles.statusCell]}>
                  <Text
                    style={[
                      styles.statusBadge,
                      { color: getStatusColor(student.status) },
                    ]}
                  >
                    {student.status}
                  </Text>
                </View>
              </View>
            ))}
          </View>
        )}
      </View>

      {/* DATA MAHASISWA EXTERNAL API */}
      <View style={styles.courseCard}>
        <Pressable
          style={styles.dropdownHeader}
          onPress={() => setShowApiStudents(!showApiStudents)}
        >
          <Text style={styles.courseTitle}>
            Data Mahasiswa dari External API
          </Text>

          <Text style={styles.dropdownIcon}>{showApiStudents ? "▲" : "▼"}</Text>
        </Pressable>

        {showApiStudents && (
          <View style={styles.tableContainer}>
            <View style={styles.apiTableHeader}>
              <Text style={[styles.tableHeaderText, styles.apiNameColumn]}>
                Nama
              </Text>
              <Text style={[styles.tableHeaderText, styles.apiEmailColumn]}>
                Email
              </Text>
            </View>

            {loading ? (
              <Text style={styles.nim}>Memuat data...</Text>
            ) : apiStudents.length === 0 ? (
              <Text style={styles.nim}>
                Data gagal dimuat. Periksa koneksi internet.
              </Text>
            ) : (
              apiStudents.map((student) => (
                <View key={student.id} style={styles.apiTableRow}>
                  <Text
                    style={[styles.apiName, styles.apiNameColumn]}
                    numberOfLines={2}
                  >
                    {student.name}
                  </Text>

                  <Text
                    style={[styles.apiEmail, styles.apiEmailColumn]}
                    numberOfLines={2}
                  >
                    {student.email}
                  </Text>
                </View>
              ))
            )}
          </View>
        )}
      </View>

      {/* RIWAYAT PRESENSI */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Riwayat Presensi</Text>

        {attendanceData.map((attendance) => (
          <View key={attendance.id} style={styles.historyRow}>
            <View style={styles.historyInfo}>
              <Text style={styles.historySubject}>{attendance.subject}</Text>
              <Text style={styles.nim}>{attendance.meeting}</Text>
            </View>

            <Text
              style={[
                styles.historyStatus,
                { color: getStatusColor(attendance.status) },
              ]}
            >
              {attendance.status}
            </Text>
          </View>
        ))}
      </View>

      {/* NAVIGASI APLIKASI */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>Navigasi Aplikasi</Text>

        <Pressable
          style={styles.attendanceButton}
          onPress={() => router.push("/riwayat" as any)}
        >
          <Text style={styles.attendanceButtonText}>LIHAT HALAMAN RIWAYAT</Text>
        </Pressable>

        <Pressable
          style={[styles.attendanceButton, styles.profileNavigationButton]}
          onPress={() => router.replace("/profil" as any)}
        >
          <Text style={styles.attendanceButtonText}>BUKA HALAMAN PROFIL</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
