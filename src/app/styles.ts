import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F4EF",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#3F342E",
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
    color: "#3F342E",
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
    padding: 22,
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
    marginBottom: 10,
  },

  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A403B",
    marginBottom: 20,
  },

  selectLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#7A6F68",
    marginBottom: 10,
    marginTop: 5,
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
    borderColor: "#D8D2CC",
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
    borderTopColor: "#E8DED7",
  },

  selectedSubject: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#171717",
  },

  status: {
    fontSize: 13,
    marginTop: 7,
  },

  attendanceButton: {
    height: 48,
    backgroundColor: "#3F7D58",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 18,
  },

  attendanceButtonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },

  studentRow: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E8DED7",
  },

  studentRowName: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#4A403B",
  },

  historyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: "#E8DED7",
  },

  historySubject: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#171717",
  },
});