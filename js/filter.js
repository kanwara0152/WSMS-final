function filterCourses() {
  const search = document.getElementById("search").value.toLowerCase();
  const category = document.getElementById("categoryFilter").value;

  const result = mockCourses.filter(c => {
    return (
      c.name.toLowerCase().includes(search) &&
      (category === "all" || c.category === category)
    );
  });

  displayCourses(result);
}