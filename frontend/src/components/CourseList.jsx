import React from 'react';

const gridStyle = {
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
  maxWidth: '1080px',
  margin: '0 auto 48px',
  padding: '0 24px',
};

const cardStyle = {
  background: '#fff',
  borderRadius: '24px',
  boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

const categoryStyle = {
  color: '#0284C7',
  fontWeight: 700,
};

const linkStyle = {
  display: 'inline-block',
  marginTop: '12px',
  color: '#2563EB',
  textDecoration: 'none',
  fontWeight: 700,
};

export default function CourseList({ courses, loading }) {
  if (loading) {
    return <p style={{ textAlign: 'center', padding: '20px' }}>กำลังโหลดคอร์ส...</p>;
  }

  if (!courses || courses.length === 0) {
    return <p style={{ textAlign: 'center', padding: '20px' }}>ยังไม่มีคอร์สให้แสดง</p>;
  }

  return (
    <div style={gridStyle}>
      {courses.map((course) => (
        <article key={course.id} style={cardStyle}>
          <div style={categoryStyle}>{course.category}</div>
          <h2 style={{ margin: 0, fontSize: '1.25rem' }}>{course.name}</h2>
          <p style={{ color: '#475569', lineHeight: 1.7 }}>{course.description}</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: 'auto' }}>
            <span>ราคา: {course.price} บาท</span>
            <span>เริ่ม: {course.start_date}</span>
          </div>
          <div style={{ color: '#475569' }}>
            แพลตฟอร์ม: {course.platform} • เวลา: {course.time}
          </div>
          <a style={linkStyle} href={course.link} target="_blank" rel="noopener noreferrer">
            ดูรายละเอียดคอร์ส
          </a>
        </article>
      ))}
    </div>
  );
}