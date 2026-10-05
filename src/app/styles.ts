import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F5F0",
    padding: 20,
  },

  header: {
    marginTop: 40,
    marginBottom: 25,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#4A3B32",
  },

  subtitle: {
    fontSize: 16,
    color: "#7A6A60",
    marginTop: 5,
  },

  studentCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 20,
  },

  label: {
    fontSize: 13,
    color: "#8A7B72",
    marginBottom: 4,
  },

  profileName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#3D3029",
  },

  nim: {
    fontSize: 14,
    color: "#75665D",
    marginTop: 4,
  },

  courseCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    padding: 18,
  },

  courseTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#4A3B32",
    marginBottom: 15,
  },

  studentRow: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E0DA",
  },

  studentRowName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#4A3B32",
  },

  status: {
    fontSize: 13,
    marginTop: 4,
  },

  section: {
  marginBottom: 18,
},

sectionTitle: {
  fontSize: 20,
  fontWeight: "bold",
  marginBottom: 12,
},

summaryContainer: {
  flexDirection: "row",
  gap: 10,
},

summaryCard: {
  flex: 1,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  padding: 18,
  alignItems: "center",
},

summaryNumber: {
  fontSize: 26,
  fontWeight: "bold",
  color: "#3F7D58",
},

summaryLabel: {
  marginTop: 5,
  color: "#777777",
},

percentageCard: {
  marginTop: 10,
  backgroundColor: "#FFFFFF",
  borderRadius: 12,
  padding: 18,
  alignItems: "center",
},

percentageLabel: {
  fontSize: 15,
  color: "#777777",
},

todaySubject: {
  fontSize: 18,
  fontWeight: "bold",
  marginTop: 10,
},

attendanceButton: {
  backgroundColor: "#3F7D58",
  borderRadius: 10,
  paddingVertical: 14,
  alignItems: "center",
  marginTop: 18,
},

attendanceButtonText: {
  color: "#FFFFFF",
  fontWeight: "bold",
},

historyRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  paddingVertical: 15,
  borderBottomWidth: 1,
  borderBottomColor: "#E5E5E5",
},

historySubject: {
  fontSize: 16,
  fontWeight: "bold",
},
});
