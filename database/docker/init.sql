CREATE TABLE courses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  category VARCHAR(100),
  price INT,
  level VARCHAR(20),
  description TEXT,
  platform VARCHAR(100),
  link TEXT,
  startDate DATE,
  time VARCHAR(50)
);

INSERT INTO courses (name, category, price, level, description, platform, link, startDate, time)
VALUES
('Web Dev Online', 'Coding', 1200, 'basic', 'เรียนผ่าน Zoom', 'Zoom', 'https://zoom.us/1', '2026-05-10', '18:00-20:00'),
('UX Advanced', 'Design', 2500, 'silver', 'UX ขั้นสูง', 'Meet', 'https://meet.google.com/1', '2026-05-15', '19:00-21:00'),
('AI Business', 'Business', 5000, 'gold', 'AI สำหรับธุรกิจ', 'Website', 'https://example.com', '2026-05-20', '20:00-22:00'),
('Python for Beginners', 'Programming', 1500, 'basic', 'เรียน Python เบื้องต้น', 'Zoom', 'https://zoom.us/2', '2026-06-01', '18:00-20:00'),
('Advanced Java', 'Programming', 3000, 'gold', 'Java ขั้นสูง', 'Meet', 'https://meet.google.com/2', '2026-06-05', '19:00-21:00'),
('Digital Marketing 101', 'Marketing', 2000, 'silver', 'การตลาดดิจิทัลเบื้องต้น', 'Website', 'https://example.com/marketing', '2026-06-10', '20:00-22:00'),
('Data Science Bootcamp', 'Data', 4000, 'gold', 'ค่าย Data Science', 'Zoom', 'https://zoom.us/3', '2026-06-15', '18:00-21:00'),
('Graphic Design Basics', 'Design', 1800, 'basic', 'พื้นฐานการออกแบบกราฟิก', 'Meet', 'https://meet.google.com/3', '2026-06-20', '19:00-21:00'),
('AI for Everyone', 'AI', 2500, 'silver', 'AI สำหรับทุกคน', 'Website', 'https://example.com/ai', '2026-06-25', '20:00-22:00'),
('Cybersecurity Essentials', 'IT', 3500, 'gold', 'พื้นฐาน Cybersecurity', 'Zoom', 'https://zoom.us/4', '2026-07-01', '18:00-20:00'),
('Blockchain Basics', 'Technology', 2200, 'silver', 'พื้นฐาน Blockchain', 'Meet', 'https://meet.google.com/4', '2026-07-05', '19:00-21:00'),
('Photography Masterclass', 'Art', 2800, 'gold', 'การถ่ายภาพขั้นสูง', 'Website', 'https://example.com/photo', '2026-07-10', '20:00-22:00'),
('Public Speaking', 'Communication', 1700, 'basic', 'การพูดในที่สาธารณะ', 'Zoom', 'https://zoom.us/5', '2026-07-15', '18:00-20:00');

CREATE TABLE admin (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
);

INSERT INTO admin (username, password, email)
VALUES
('admin1', 'password123', 'admin1@example.com'),
('admin2', 'password456', 'admin2@example.com');

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO user (username, password, email)
VALUES
('user1', 'userpass123', 'user1@example.com'),
('user2', 'userpass456', 'user2@example.com');

