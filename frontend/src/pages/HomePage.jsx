import React, { useEffect, useState } from 'react';
import { fetchCourses } from '../api/course';
import CourseList from '../components/CourseList';

const heroStyle = {
  maxWidth: '1080px',
  margin: '0 auto',
  padding: '48px 24px 24px',
};

const titleStyle = {
  fontSize: 'clamp(2rem, 3vw, 3.2rem)',
  lineHeight: 1.05,
  marginBottom: '20px',
};

const subtitleStyle = {
  maxWidth: '720px',
  fontSize: '1rem',
  color: '#475569',
  marginBottom: '24px',
};

const heroButton = {
  border: 'none',
  borderRadius: '999px',
  padding: '14px 26px',
  background: '#22C55E',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 700,
};

export default function HomePage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses()
      .then((data) => setCourses(data))
      .catch(() => setCourses([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <section style={heroStyle}>
        <div style={{ marginBottom: '12px', color: '#0EA5E9', fontWeight: 700 }}>
          คอร์สเรียนออนไลน์
        </div>
        <h1 style={titleStyle}>รวมคอร์สเรียนที่ตอบโจทย์ทั้งสายเทคและสายออกแบบ</h1>
        <p style={subtitleStyle}>
          เลือกคอร์สเรียนที่ใช่สำหรับคุณ จากคอร์สสดออนไลน์ถึงคอร์สเรียนทำงานจริง พร้อมรายละเอียดครบทั้งราคา,
          วันเริ่ม, แพลตฟอร์ม และลิงก์สมัครเรียน
        </p>
        <button style={heroButton} onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}>
          ดูคอร์สทั้งหมด
        </button>
      </section>
      <CourseList courses={courses} loading={loading} />
    </div>
  );
}