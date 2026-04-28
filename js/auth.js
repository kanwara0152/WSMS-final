const levels = ["basic", "silver", "gold"];

// ตั้งค่าเริ่มต้น
if (!localStorage.getItem("userLevel")) {
  localStorage.setItem("userLevel", "basic");
}

function canAccess(userLevel, courseLevel) {
  return levels.indexOf(userLevel) >= levels.indexOf(courseLevel);
}