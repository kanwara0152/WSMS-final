import React from 'react';

const pageStyle = {
  background: '#F8FAFC',
  padding: '32px 24px 48px',
  minHeight: 'calc(100vh - 90px)',
};

const heroStyle = {
  maxWidth: '1120px',
  margin: '0 auto 32px',
  padding: '32px',
  background: 'linear-gradient(135deg, #1D4ED8 0%, #2563EB 100%)',
  borderRadius: '32px',
  color: '#fff',
};

const titleStyle = {
  fontSize: 'clamp(2rem, 2.8vw, 3rem)',
  margin: '0 0 16px',
  lineHeight: 1.05,
};

const subtitleStyle = {
  maxWidth: '720px',
  color: 'rgba(255, 255, 255, 0.85)',
  lineHeight: 1.8,
};

const gridStyle = {
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  maxWidth: '1120px',
  margin: '0 auto',
};

const cardStyle = {
  background: '#fff',
  borderRadius: '24px',
  boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
  padding: '24px',
  minHeight: '260px',
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '8px',
  padding: '6px 12px',
  borderRadius: '999px',
  background: '#EFF6FF',
  color: '#1D4ED8',
  fontSize: '0.85rem',
  fontWeight: 700,
  marginBottom: '18px',
};

const endpointStyle = {
  display: 'inline-block',
  marginTop: '14px',
  padding: '12px 14px',
  borderRadius: '16px',
  background: '#F8FAFC',
  border: '1px solid #E2E8F0',
  color: '#0F172A',
  fontFamily: 'monospace',
  fontSize: '0.92rem',
};

const exampleStyle = {
  marginTop: '16px',
  padding: '16px',
  borderRadius: '18px',
  background: '#0F172A',
  color: '#F8FAFC',
  fontFamily: 'monospace',
  fontSize: '0.95rem',
  lineHeight: 1.6,
};

const products = [
  {
    title: 'Course Catalog API',
    label: 'Catalog / Listing',
    description: 'ดึงรายการคอร์สทั้งหมดพร้อมรายละเอียดราคาและแพลตฟอร์ม',
    method: 'GET',
    endpoint: '/courses',
    example: `[
  {"id":1,"name":"Fullstack JavaScript","category":"Coding","price":3000,"description":"เรียน Node.js + React ครบ","platform":"Zoom","link":"https://zoom.us/2","start_date":"2026-06-01","time":"18:00-21:00"},
  {"id":2,"name":"Graphic Design Basics","category":"Design","price":1500,"description":"พื้นฐาน Photoshop และ Illustrator","platform":"Meet","link":"https://meet.google.com/2","start_date":"2026-06-05","time":"19:00-21:00"}
]`,
  },
  {
    title: 'Course Detail API',
    label: 'Detail',
    description: 'ดึงข้อมูลคอร์สเฉพาะตัวตาม id เพื่อดูรายละเอียดคอร์สทั้งหมด',
    method: 'GET',
    endpoint: '/courses?id=1',
    example: `{
  "id":1,
  "name":"Fullstack JavaScript",
  "category":"Coding",
  "price":3000,
  "description":"เรียน Node.js + React ครบ",
  "platform":"Zoom",
  "link":"https://zoom.us/2",
  "start_date":"2026-06-01",
  "time":"18:00-21:00"
}`,
  },
  {
    title: 'Course Search API',
    label: 'Search',
    description: 'ค้นหาคอร์สด้วยคำค้น เช่น หมวดหมู่ หรือชื่อคอร์ส',
    method: 'GET',
    endpoint: '/courses?query=design',
    example: `[
  {"id":2,"name":"Graphic Design Basics","category":"Design","price":1500,"description":"พื้นฐาน Photoshop และ Illustrator","platform":"Meet","link":"https://meet.google.com/2","start_date":"2026-06-05","time":"19:00-21:00"}
]`,
  },
  {
    title: 'Course Enrollment API',
    label: 'Enroll',
    description: 'ส่งคำขอสมัครเรียนคอร์สพร้อมข้อมูลผู้ใช้และคอร์ส',
    method: 'POST',
    endpoint: '/courses/enroll',
    example: `{
  "course_id": 1,
  "student_name": "นิสิต",
  "email": "student@example.com"
}`,
  },
];

export default function ApiProductsPage() {
  return (
    <div style={pageStyle}>
      <section style={heroStyle}>
        <div style={{ marginBottom: '14px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em' }}>
          API Catalog
        </div>
        <h1 style={titleStyle}>รวม API สำหรับระบบคอร์สเรียน</h1>
        <p style={subtitleStyle}>
          หน้านี้แสดง API ที่ใช้ในการเรียกข้อมูลคอร์ส, ดูรายละเอียด, ค้นหาคอร์ส และส่งคำขอสมัครเรียนในระบบคอร์สของเรา
        </p>
      </section>
      <div style={gridStyle}>
        {products.map((product) => (
          <article key={product.title} style={cardStyle}>
            <span style={labelStyle}>{product.label}</span>
            <h2 style={{ margin: '0 0 12px', fontSize: '1.4rem' }}>{product.title}</h2>
            <p style={{ color: '#475569', flex: 1 }}>{product.description}</p>
            <div style={endpointStyle}>
              <strong>{product.method}</strong> {product.endpoint}
            </div>
            <div style={exampleStyle}>{product.example}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
