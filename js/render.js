function displayCourses(list) {
  const container = document.getElementById("courseList");
  const userLevel = localStorage.getItem("userLevel");

  container.innerHTML = "";

  list.forEach(c => {
    const access = canAccess(userLevel, c.level);

    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <h3>${c.name}</h3>
      <p>หมวด: ${c.category}</p>
      <p>ราคา: ${c.price} บาท</p>
      <p>Platform: ${c.platform}</p>
      <p>ระดับ: ${c.level}</p>
      ${!access ? "<p style='color:red;'>🔒 locked</p>" : ""}
    `;

    div.onclick = () => {
      if (access) {
        alert("ไปหน้า detail ได้ (ยังไม่ทำ)");
      } else {
        alert("ต้องอัปเกรดสมาชิกก่อน");
      }
    };

    container.appendChild(div);
  });
}