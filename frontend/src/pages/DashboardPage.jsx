import React from 'react';

const pageStyle = {
  background: '#F8FAFC',
  padding: '32px 24px 48px',
  minHeight: 'calc(100vh - 90px)',
};

const heroStyle = {
  maxWidth: '1120px',
  margin: '0 auto 24px',
  padding: '30px',
  borderRadius: '28px',
  background: 'linear-gradient(135deg, #1E3A8A 0%, #2563EB 100%)',
  color: '#F8FAFC',
  boxShadow: '0 24px 60px rgba(15, 23, 42, 0.18)',
};

const title = {
  fontSize: 'clamp(2rem, 2.7vw, 3rem)',
  margin: 0,
  lineHeight: 1.05,
};

const subtitle = {
  marginTop: '16px',
  fontSize: '1rem',
  lineHeight: 1.8,
  color: 'rgba(248, 250, 252, 0.9)',
};

const grid = {
  display: 'grid',
  gap: '24px',
  maxWidth: '1120px',
  margin: '0 auto',
};

const card = {
  background: '#fff',
  borderRadius: '28px',
  boxShadow: '0 20px 50px rgba(15, 23, 42, 0.08)',
  padding: '24px',
};

const statGrid = {
  display: 'grid',
  gap: '16px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
};

const statCard = {
  background: '#F8FAFC',
  borderRadius: '24px',
  padding: '20px',
  border: '1px solid #E2E8F0',
};

const label = {
  color: '#2563EB',
  fontWeight: 700,
  fontSize: '0.9rem',
  marginBottom: '10px',
  display: 'inline-block',
};

const progressBackground = {
  width: '100%',
  height: '12px',
  borderRadius: '999px',
  background: '#E2E8F0',
  overflow: 'hidden',
  marginTop: '18px',
};

const progressFill = {
  height: '100%',
  width: '45%',
  borderRadius: '999px',
  background: '#2563EB',
};

const actionButton = {
  width: '100%',
  padding: '14px 18px',
  borderRadius: '18px',
  border: 'none',
  background: '#2563EB',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
};

const activityItem = {
  padding: '18px',
  borderRadius: '22px',
  background: '#F8FAFC',
  border: '1px solid #E2E8F0',
};

export default function DashboardPage() {
  return (
    <div style={pageStyle}>
      <section style={{ ...heroStyle, background: 'linear-gradient(135deg, #0B1120 0%, #1E293B 100%)' }}>
        <div style={{ marginBottom: '12px', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#C7D2FE' }}>
          Performance Summary
        </div>
        <h1 style={{ ...title, color: '#F8FAFC' }}>แดชบอร์ดคอร์สเรียนของคุณ</h1>
        <p style={subtitle}>
          ดูภาพรวมการเข้าคอร์ส ความคืบหน้าของบทเรียน และสถานะการสมัครแบบชัดเจนภายในหน้าเดียว
        </p>
      </section>

      <div style={{ ...grid, gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        <div style={statCard}>
          <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '8px' }}>Current Plan</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>basic</div>
        </div>
        <div style={statCard}>
          <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '8px' }}>Quota Used</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>0</div>
        </div>
        <div style={statCard}>
          <div style={{ color: '#94A3B8', fontSize: '0.85rem', marginBottom: '8px' }}>Remaining</div>
          <div style={{ fontSize: '2.5rem', fontWeight: 900 }}>1000</div>
        </div>
        <div style={{ gridColumn: 'span 3' }}>
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <p style={{ margin: 0, ...label }}>Learning Path</p>
                <h2 style={{ marginTop: '10px', marginBottom: 0, fontSize: '1.6rem' }}>คอร์สถัดไป: Advanced UI Design</h2>
              </div>
              <div style={{ color: '#94A3B8' }}>เหลือ 4 บทเรียน</div>
            </div>
            <div style={progressBackground}>
              <div style={{ ...progressFill, width: '60%' }}></div>
            </div>
          </div>
        </div>

        <div style={{ gridColumn: 'span 3' }}>
          <div style={card}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
              <div>
                <p style={{ margin: 0, ...label }}>Usage Overview</p>
                <h2 style={{ marginTop: '10px', marginBottom: 0, fontSize: '1.6rem' }}>0.0% used</h2>
              </div>
              <div style={{ color: '#64748B' }}>Quota limit: 1000</div>
            </div>
            <div style={{ display: 'grid', gap: '16px', marginTop: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Used</span>
                <strong>0</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Remaining</span>
                <strong>1000</strong>
              </div>
            </div>
            <div style={progressBackground}>
              <div style={{ ...progressFill, width: '0%' }}></div>
            </div>
          </div>
        </div>

        <div style={{ gridColumn: 'span 3' }}>
          <div style={card}>
            <h2 style={{ marginTop: 0, fontSize: '1.45rem' }}>Billing & Subscription</h2>
            <div style={{ display: 'grid', gap: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Status</span>
                <strong style={{ color: '#16A34A' }}>Active</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Cycle</span>
                <strong>Monthly</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Next payment</span>
                <strong>30 Apr 2026</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
