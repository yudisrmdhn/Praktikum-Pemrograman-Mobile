import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF5F5",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#C62828",
  },

  subtitle: {
    fontSize: 16,
    color: "#7A6F68",
    marginTop: 5,
  },

  studentCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 15,
    marginBottom: 22,
  },

  label: {
    fontSize: 13,
    color: "#8A7B72",
    marginBottom: 8,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#7F1D1D",
    marginBottom: 5,
  },

  nim: {
    fontSize: 14,
    color: "#7A6F68",
    marginTop: 4,
  },

  section: {
    marginHorizontal: 20,
    marginBottom: 22,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#171717",
    marginBottom: 12,
  },

  summaryContainer: {
    flexDirection: "row",
    gap: 10,
  },

  summaryCard: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 15,
    padding: 18,
    alignItems: "center",
  },

  summaryNumber: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#3F7D58",
  },

  summaryLabel: {
    fontSize: 14,
    color: "#7A6F68",
    marginTop: 5,
  },

  percentageCard: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 22,
    alignItems: "center",
    marginTop: 10,
  },

  percentageLabel: {
    fontSize: 14,
    color: "#7A6F68",
  },

  percentageNumber: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3F7D58",
    marginTop: 5,
  },

  courseCard: {
    backgroundColor: "white",
    marginHorizontal: 20,
    padding: 18,
    borderRadius: 15,
    marginBottom: 12,
  },

  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A403B",
    marginBottom: 0,
    flex: 1,
  },

  selectLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7A6F68",
    marginBottom: 10,
    marginTop: 15,
  },

  dayContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 15,
  },

  dayButton: {
    flex: 1,
    paddingVertical: 11,
    borderRadius: 9,
    borderWidth: 1,
    borderColor: "#F0CACA",
    alignItems: "center",
  },

  selectedDayButton: {
    backgroundColor: "#3F7D58",
    borderColor: "#3F7D58",
  },

  dayButtonText: {
    fontSize: 13,
    color: "#4A403B",
  },

  selectedDayButtonText: {
    color: "white",
    fontWeight: "bold",
  },

  courseOption: {
    borderWidth: 1,
    borderColor: "#D8D2CC",
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
  },

  selectedCourse: {
    backgroundColor: "#3F7D58",
    borderColor: "#3F7D58",
  },

  courseOptionText: {
    fontSize: 14,
    color: "#4A403B",
    textAlign: "center",
  },

  selectedCourseText: {
    color: "white",
    fontWeight: "bold",
  },

  presenceBox: {
    marginTop: 10,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: "#F5DEDE",
  },

  selectedSubject: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#171717",
  },

  presenceStatusRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 14,
  },

  statusLabel: {
    fontSize: 14,
    color: "#7A6F68",
  },

  presenceStatus: {
    fontSize: 14,
    fontWeight: "bold",
  },

  attendanceButton: {
    height: 48,
    backgroundColor: "#3F7D58",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  disabledAttendanceButton: {
    backgroundColor: "#8BAE96",
  },

  attendanceButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },

  profileNavigationButton: {
    backgroundColor: "#B71C1C",
  },

  // DROPDOWN
  dropdownHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 4,
  },

  dropdownIcon: {
    fontSize: 15,
    color: "#C62828",
    fontWeight: "bold",
    marginLeft: 10,
  },

  // TABEL MAHASISWA UMM
  tableContainer: {
    marginTop: 18,
  },

  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF5F5",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  tableHeaderText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#7F1D1D",
  },

  nameColumn: {
    flex: 1.35,
    paddingRight: 6,
  },

  nimColumn: {
    flex: 1,
    paddingRight: 5,
  },

  statusColumn: {
    flex: 0.7,
    alignItems: "flex-end",
  },

  tableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E8DED7",
  },

  tableName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4A403B",
  },

  tableNim: {
    fontSize: 11,
    color: "#7A6F68",
  },

  statusCell: {
    justifyContent: "center",
  },

  statusBadge: {
    fontSize: 12,
    fontWeight: "bold",
  },

  // TABEL EXTERNAL API
  apiTableHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF5F5",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
  },

  apiNameColumn: {
    flex: 1,
    paddingRight: 8,
  },

  apiEmailColumn: {
    flex: 1.2,
  },

  apiTableRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E8DED7",
  },

  apiName: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#4A403B",
  },

  apiEmail: {
    fontSize: 11,
    color: "#7A6F68",
  },

  // RIWAYAT PRESENSI
  historyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E8DED7",
  },

  historyInfo: {
    flex: 1,
    paddingRight: 10,
  },

  historySubject: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#171717",
  },

  historyStatus: {
    fontSize: 13,
    fontWeight: "bold",
  },
});
