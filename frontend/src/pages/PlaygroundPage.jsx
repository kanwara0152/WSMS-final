import React, { useState } from 'react';

const pageStyle = {
  background: '#F8FAFC',
  padding: '32px 24px 48px',
  minHeight: 'calc(100vh - 90px)',
};

const containerStyle = {
  maxWidth: '1120px',
  margin: '0 auto',
  display: 'grid',
  gap: '24px',
  gridTemplateColumns: '1.2fr 1fr',
};

const panelStyle = {
  background: '#fff',
  borderRadius: '24px',
  boxShadow: '0 20px 60px rgba(15, 23, 42, 0.08)',
  padding: '24px',
};

const labelStyle = {
  color: '#64748B',
  fontSize: '0.85rem',
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: '12px',
};

const fieldStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '16px',
  border: '1px solid #CBD5E1',
  fontSize: '1rem',
  marginBottom: '16px',
};

const buttonStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '16px',
  border: 'none',
  background: '#2563EB',
  color: '#fff',
  fontSize: '1rem',
  fontWeight: 700,
  cursor: 'pointer',
};

const responseBox = {
  background: '#0F172A',
  color: '#F8FAFC',
  borderRadius: '20px',
  padding: '20px',
  minHeight: '340px',
  fontFamily: 'monospace',
  fontSize: '0.95rem',
  whiteSpace: 'pre-wrap',
  overflowX: 'auto',
};

const noteStyle = {
  marginTop: '12px',
  color: '#475569',
  fontSize: '0.95rem',
  lineHeight: 1.7,
};

const apiOptions = [
  {
    label: 'Course Catalog',
    method: 'GET',
    endpoint: 'http://localhost:8080/courses',
    body: '',
    description: 'ดึงรายการคอร์สทั้งหมด',
  },
  {
    label: 'Course Detail (id=1)',
    method: 'GET',
    endpoint: 'http://localhost:8080/courses?id=1',
    body: '',
    description: 'ดูรายละเอียดคอร์สทีละคอร์ส',
  },
  {
    label: 'Course Search',
    method: 'GET',
    endpoint: 'http://localhost:8080/courses?query=design',
    body: '',
    description: 'ค้นหาคอร์สด้วยคำค้น',
  },
  {
    label: 'Course Enroll',
    method: 'POST',
    endpoint: 'http://localhost:8080/courses/enroll',
    body: '{\n  "course_id": 1,\n  "student_name": "นิสิต",\n  "email": "student@example.com"\n}',
    description: 'ส่งคำขอสมัครเรียนคอร์ส (ตัวอย่าง)',
  },
];

export default function PlaygroundPage() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [endpoint, setEndpoint] = useState(apiOptions[0].endpoint);
  const [requestBody, setRequestBody] = useState(apiOptions[0].body);
  const [response, setResponse] = useState('Ready to test API');
  const [loading, setLoading] = useState(false);

  const selectedApi = apiOptions[selectedIndex];

  const handleApiChange = (index) => {
    setSelectedIndex(index);
    setEndpoint(apiOptions[index].endpoint);
    setRequestBody(apiOptions[index].body);
    setResponse('Ready to test API');
  };

  const runApi = async () => {
    setLoading(true);
    setResponse('Loading...');
    try {
      const options = {
        method: selectedApi.method,
        headers: {
          'Content-Type': 'application/json',
        },
      };

      if (selectedApi.method === 'POST') {
        options.body = requestBody;
      }

      const res = await fetch(endpoint, options);
      const text = await res.text();
      try {
        const parsed = JSON.parse(text);
        setResponse(JSON.stringify(parsed, null, 2));
      } catch {
        setResponse(text || `HTTP ${res.status} ${res.statusText}`);
      }
    } catch (error) {
      setResponse(`Request failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={pageStyle}>
      <section style={{ maxWidth: '1120px', margin: '0 auto 24px' }}>
        <div style={{ color: '#0EA5E9', fontWeight: 700, marginBottom: '12px', textTransform: 'uppercase', letterSpacing: '0.14em' }}>
          Interactive Testing
        </div>
        <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 2.8vw, 3rem)' }}>
          API Playground
        </h1>
        <p style={{ marginTop: '16px', color: '#475569', maxWidth: '760px', lineHeight: 1.8 }}>
          ทดลองเรียก API คอร์สเรียนได้ที่หน้านี้ เลือก endpoint, แก้ request body แล้วดูผล response ได้ทันที
          หากเรียกไม่ได้ให้ตรวจสอบว่า backend ของคุณกำลังรันอยู่ที่ <strong>localhost:8080</strong>
        </p>
      </section>
      <div style={containerStyle}>
        <div style={panelStyle}>
          <div style={labelStyle}>Request</div>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>API Product</label>
          <select
            style={fieldStyle}
            value={selectedIndex}
            onChange={(event) => handleApiChange(Number(event.target.value))}
          >
            {apiOptions.map((api, index) => (
              <option key={api.label} value={index}>
                {api.label}
              </option>
            ))}
          </select>
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Method</label>
          <input style={fieldStyle} readOnly value={selectedApi.method} />
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Endpoint</label>
          <input style={fieldStyle} value={endpoint} onChange={(e) => setEndpoint(e.target.value)} />
          <label style={{ display: 'block', marginBottom: '8px', fontWeight: 600 }}>Request Body</label>
          <textarea
            style={{ ...fieldStyle, height: '180px', fontFamily: 'monospace' }}
            value={requestBody}
            onChange={(e) => setRequestBody(e.target.value)}
            disabled={selectedApi.method !== 'POST'}
          />
          <button style={buttonStyle} onClick={runApi} disabled={loading}>
            {loading ? 'Running...' : 'Run API'}
          </button>
          <p style={noteStyle}>
            หมายเหตุ: จุดนี้ช่วยให้คุณลองเรียก API คอร์สเรียนได้ ถ้า backend ยังไม่รัน หรือไม่มี endpoint จะเห็น error ใน response
          </p>
        </div>
        <div style={panelStyle}>
          <div style={labelStyle}>Response</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ fontWeight: 700, fontSize: '1.05rem' }}>ผลลัพธ์ที่ได้จากการเรียก API</div>
            <div style={{ color: '#94A3B8', fontSize: '0.95rem' }}>{loading ? 'Loading' : 'Idle'}</div>
          </div>
          <div style={responseBox}>{response}</div>
        </div>
      </div>
    </div>
  );
}
