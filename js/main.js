// 🔥 mock data (แทน database)
const mockCourses = [
  {
    id: 1,
    name: "Web Development",
    category: "Coding",
    price: 1200,
    level: "basic",
    platform: "Zoom"
  },
  {
    id: 2,
    name: "UX Design",
    category: "Design",
    price: 2000,
    level: "silver",
    platform: "Google Meet"
  },
  {
    id: 3,
    name: "AI Business",
    category: "Business",
    price: 5000,
    level: "gold",
    platform: "Website"
  }
];

// โหลดครั้งแรก
displayCourses(mockCourses);

// event
document.getElementById("search").addEventListener("input", filterCourses);
document.getElementById("categoryFilter").addEventListener("change", filterCourses);

document.getElementById("userLevel").addEventListener("change", e => {
  localStorage.setItem("userLevel", e.target.value);
  location.reload();
});