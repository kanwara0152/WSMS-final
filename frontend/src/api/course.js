export async function fetchCourses() {
  const res = await fetch('/courses');
  if (!res.ok) throw new Error('Failed to fetch courses');
  return res.json();
}

export async function fetchCourseById(id) {
  const res = await fetch(`/courses?id=${id}`);
  if (!res.ok) throw new Error('Failed to fetch course');
  return res.json();
}