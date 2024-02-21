function addStudent() {
  const loginId = document.getElementById("loginId").value;
  const semesterMarks = parseFloat(
    document.getElementById("semesterMarks").value
  );
  const attendancePercentage = parseFloat(
    document.getElementById("attendancePercentage").value
  );

  if (!loginId || isNaN(semesterMarks) || isNaN(attendancePercentage)) {
    alert("Please fill in all fields with valid values.");
    return;
  }

  const studentList = document.getElementById("studentList");
  const listItem = document.createElement("li");
  listItem.textContent = `${loginId} - Semester Marks: ${semesterMarks}, Attendance: ${attendancePercentage}%`;
  studentList.appendChild(listItem);

  // Clear form fields
  document.getElementById("loginId").value = "";
  document.getElementById("semesterMarks").value = "";
  document.getElementById("attendancePercentage").value = "";
}
