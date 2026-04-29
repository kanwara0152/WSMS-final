import React, { useState } from 'react';

const containerStyle = {
  maxWidth: '420px',
  margin: '40px auto',
  padding: '32px',
  background: '#FFFFFF',
  borderRadius: '24px',
  boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
};

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '16px',
  border: '1px solid #CBD5E1',
  marginBottom: '16px',
  fontSize: '1rem',
};

const buttonStyle = {
  width: '100%',
  padding: '14px 16px',
  borderRadius: '16px',
  border: 'none',
  background: '#2563EB',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '1rem',
  fontWeight: 700,
};

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult({ message: 'ระบบเข้าสู่ระบบยังไม่ถูกเชื่อมต่อ' });
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ marginBottom: '10px' }}>เข้าสู่ระบบ</h1>
      <p style={{ marginBottom: '24px', color: '#475569' }}>
        เข้าสู่ระบบเพื่อจัดการคอร์สและดูสถานะการสมัครเรียนของคุณ
      </p>
      <form onSubmit={handleSubmit}>
        <input
          style={inputStyle}
          type="email"
          placeholder="อีเมล"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="รหัสผ่าน"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button style={buttonStyle} type="submit">
          เข้าสู่ระบบ
        </button>
      </form>
      {result && (
        <div style={{ marginTop: '20px', color: '#334155' }}>
          {result.message}
        </div>
      )}
    </div>
  );
}