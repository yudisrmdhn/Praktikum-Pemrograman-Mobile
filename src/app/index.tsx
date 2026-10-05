import { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Pressable,
} from "react-native";
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

interface Course {
  id: number;
  day: string;
  name: string;
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
  {
    id: 1,
    day: "Senin",
    name: "Prak Pemrograman Web",
  },
  {
    id: 2,
    day: "Senin",
    name: "Piranti Cerdas B",
  },
  {
    id: 3,
    day: "Senin",
    name: "Pemrograman Fungsional E",
  },
  {
    id: 4,
    day: "Senin",
    name: "Prak Pemrograman Fungsional",
  },
  {
    id: 5,
    day: "Selasa",
    name: "Pemrograman Mobile C",
  },
  {
    id: 6,
    day: "Selasa",
    name: "Prak Pemrograman Mobile",
  },
  {
    id: 7,
    day: "Selasa",
    name: "Metopen E",
  },
  {
    id: 8,
    day: "Rabu",
    name: "Pemrograman Web D",
  },
  {
    id: 9,
    day: "Rabu",
    name: "Pengantar Game B",
  },
  {
    id: 10,
    day: "Kamis",
    name: "Etika & Profesi I",
  },
];

const days = [
  "Senin",
  "Selasa",
  "Rabu",
  "Kamis",
];

function getAttendanceStatus(
  isPresent: boolean
): string {
  if (isPresent) {
    return "Hadir";
  }

  return "Belum Presensi";
}

function getTotalPresent(): number {
  return students.filter(
    (student) => student.isPresent
  ).length;
}

function getAttendancePercentage(): number {
  const total = students.length;
  const present = getTotalPresent();

  return Math.round((present / total) * 100);
}

export default function Index() {
  const [selectedDay, setSelectedDay] =
    useState("Senin");

  const [selectedCourse, setSelectedCourse] =
    useState("");

  const [isPresent, setIsPresent] =
    useState(false);

  const coursesByDay = courses.filter(
    (course) => course.day === selectedDay
  );

  function handleDaySelect(day: string) {
    setSelectedDay(day);
    setSelectedCourse("");
    setIsPresent(false);
  }

  function handleCourseSelect(
    courseName: string
  ) {
    setSelectedCourse(courseName);
    setIsPresent(false);
  }

  function handleAttendance() {
    if (selectedCourse !== "") {
      setIsPresent(true);
    }
  }

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>
          AttendUMM
        </Text>

        <Text style={styles.subtitle}>
          Aplikasi Presensi Mahasiswa UMM
        </Text>
      </View>

      {/* PROFIL MAHASISWA */}
      <View style={styles.studentCard}>
        <Text style={styles.label}>
          Mahasiswa
        </Text>

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

      {/* RINGKASAN PRESENSI */}
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
              {students.length -
                getTotalPresent()}
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

          <Text style={styles.percentageNumber}>
            {getAttendancePercentage()}%
          </Text>
        </View>
      </View>

      {/* PILIH HARI DAN MATA KULIAH */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>
          Pilih Jadwal Presensi
        </Text>

        <Text style={styles.selectLabel}>
          Pilih Hari
        </Text>

        <View style={styles.dayContainer}>
          {days.map((day) => (
            <Pressable
              key={day}
              style={[
                styles.dayButton,
                selectedDay === day &&
                  styles.selectedDayButton,
              ]}
              onPress={() =>
                handleDaySelect(day)
              }
            >
              <Text
                style={[
                  styles.dayButtonText,
                  selectedDay === day &&
                    styles.selectedDayButtonText,
                ]}
              >
                {day}
              </Text>
            </Pressable>
          ))}
        </View>

        <Text style={styles.selectLabel}>
          Mata Kuliah Hari {selectedDay}
        </Text>

        {coursesByDay.map((course) => (
          <Pressable
            key={course.id}
            style={[
              styles.courseOption,
              selectedCourse === course.name &&
                styles.selectedCourse,
            ]}
            onPress={() =>
              handleCourseSelect(
                course.name
              )
            }
          >
            <Text
              style={[
                styles.courseOptionText,
                selectedCourse === course.name &&
                  styles.selectedCourseText,
              ]}
            >
              {course.name}
            </Text>
          </Pressable>
        ))}

        {selectedCourse !== "" && (
          <View style={styles.presenceBox}>
            <Text style={styles.selectedSubject}>
              {selectedCourse}
            </Text>

            <Text style={styles.nim}>
              Pertemuan 1
            </Text>

            <Text
              style={[
                styles.status,
                {
                  color: isPresent
                    ? "#3F7D58"
                    : "#B35C44",
                },
              ]}
            >
              Status:{" "}
              {getAttendanceStatus(
                isPresent
              )}
            </Text>

            <Pressable
              style={styles.attendanceButton}
              onPress={handleAttendance}
            >
              <Text
                style={styles.attendanceButtonText}
              >
                {isPresent
                  ? "✓ SUDAH PRESENSI"
                  : "PRESENSI SEKARANG"}
              </Text>
            </Pressable>
          </View>
        )}
      </View>

      {/* DAFTAR MAHASISWA */}
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
              Status:{" "}
              {getAttendanceStatus(
                student.isPresent
              )}
            </Text>
          </View>
        ))}
      </View>

      {/* RIWAYAT PRESENSI */}
      <View style={styles.courseCard}>
        <Text style={styles.courseTitle}>
          Riwayat Presensi
        </Text>

        {attendanceData.map(
          (attendance) => (
            <View
              key={attendance.id}
              style={styles.historyRow}
            >
              <View>
                <Text
                  style={styles.historySubject}
                >
                  {attendance.subject}
                </Text>

                <Text style={styles.nim}>
                  {attendance.meeting}
                </Text>
              </View>

              <Text
                style={{
                  color:
                    attendance.status ===
                    "Hadir"
                      ? "#3F7D58"
                      : "#B35C44",
                  fontWeight: "bold",
                }}
              >
                {attendance.status}
              </Text>
            </View>
          )
        )}
      </View>
    </ScrollView>
  );
}