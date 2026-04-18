-- Smartify LMS tables (match database/models.py db_table names — lowercase).
-- Load: mysql -u root -p smartify < database/schema.sql

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

DROP TABLE IF EXISTS past_questions;
DROP TABLE IF EXISTS past_lessons;
DROP TABLE IF EXISTS stats;
DROP TABLE IF EXISTS teachers;
DROP TABLE IF EXISTS students;
DROP TABLE IF EXISTS facets;
DROP TABLE IF EXISTS concepts;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS lessons;
DROP TABLE IF EXISTS courses;
DROP TABLE IF EXISTS departments;
DROP TABLE IF EXISTS members;
DROP TABLE IF EXISTS institutes;

SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE institutes (
  institute_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NULL,
  registration_code VARCHAR(16) NOT NULL,
  activated_date DATE NULL,
  max_members INT NOT NULL,
  current_members INT NOT NULL,
  UNIQUE KEY registration_code (registration_code)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE members (
  member_id INT AUTO_INCREMENT PRIMARY KEY,
  forename VARCHAR(64) NOT NULL,
  surname VARCHAR(64) NOT NULL,
  email VARCHAR(128) NOT NULL,
  username VARCHAR(128) NOT NULL,
  password LONGTEXT NOT NULL,
  institute_id_fk INT NOT NULL,
  UNIQUE KEY email (email),
  UNIQUE KEY username (username),
  CONSTRAINT fk_members_institute FOREIGN KEY (institute_id_fk) REFERENCES institutes (institute_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE departments (
  department_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  institute_id_fk INT NOT NULL,
  member_id_fk INT NOT NULL,
  CONSTRAINT fk_dept_institute FOREIGN KEY (institute_id_fk) REFERENCES institutes (institute_id),
  CONSTRAINT fk_dept_member FOREIGN KEY (member_id_fk) REFERENCES members (member_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE courses (
  course_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(128) NOT NULL,
  description VARCHAR(2048) NOT NULL,
  programme_year INT NOT NULL,
  creation_date DATE NOT NULL,
  department_id_fk INT NOT NULL,
  CONSTRAINT fk_courses_dept FOREIGN KEY (department_id_fk) REFERENCES departments (department_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE lessons (
  lesson_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  description VARCHAR(2048) NOT NULL,
  programme_year INT NOT NULL,
  creation_date DATE NOT NULL,
  course_id_fk INT NOT NULL,
  CONSTRAINT fk_lessons_course FOREIGN KEY (course_id_fk) REFERENCES courses (course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(64) NOT NULL,
  institute_id_fk INT NOT NULL,
  course_id_fk INT NOT NULL,
  CONSTRAINT fk_cat_institute FOREIGN KEY (institute_id_fk) REFERENCES institutes (institute_id),
  CONSTRAINT fk_cat_course FOREIGN KEY (course_id_fk) REFERENCES courses (course_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE questions (
  question_id INT AUTO_INCREMENT PRIMARY KEY,
  question VARCHAR(2048) NOT NULL,
  lesson_id_fk INT NOT NULL,
  CONSTRAINT fk_questions_lesson FOREIGN KEY (lesson_id_fk) REFERENCES lessons (lesson_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE concepts (
  concept_id INT AUTO_INCREMENT PRIMARY KEY,
  answer LONGTEXT NOT NULL,
  question_id_fk INT NULL,
  CONSTRAINT fk_concepts_question FOREIGN KEY (question_id_fk) REFERENCES questions (question_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE facets (
  facet_id INT AUTO_INCREMENT PRIMARY KEY,
  answer LONGTEXT NOT NULL,
  question_id_fk INT NULL,
  CONSTRAINT fk_facets_question FOREIGN KEY (question_id_fk) REFERENCES questions (question_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE students (
  student_id INT AUTO_INCREMENT PRIMARY KEY,
  discipline VARCHAR(256) NOT NULL,
  programme_year INT NOT NULL,
  member_id_fk INT NOT NULL,
  CONSTRAINT fk_students_member FOREIGN KEY (member_id_fk) REFERENCES members (member_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE teachers (
  teacher_id INT AUTO_INCREMENT PRIMARY KEY,
  member_id_fk INT NOT NULL,
  CONSTRAINT fk_teachers_member FOREIGN KEY (member_id_fk) REFERENCES members (member_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE stats (
  stat_id INT AUTO_INCREMENT PRIMARY KEY,
  student_id_fk INT NOT NULL,
  CONSTRAINT fk_stats_student FOREIGN KEY (student_id_fk) REFERENCES students (student_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE past_lessons (
  past_lesson_id INT AUTO_INCREMENT PRIMARY KEY,
  result DOUBLE NOT NULL,
  start_date DATETIME(6) NOT NULL,
  end_date DATETIME(6) NULL,
  lesson_id_fk INT NOT NULL,
  stat_id_fk INT NOT NULL,
  CONSTRAINT fk_pastlessons_lesson FOREIGN KEY (lesson_id_fk) REFERENCES lessons (lesson_id),
  CONSTRAINT fk_pastlessons_stat FOREIGN KEY (stat_id_fk) REFERENCES stats (stat_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE past_questions (
  past_question_id INT AUTO_INCREMENT PRIMARY KEY,
  result DOUBLE NOT NULL,
  date DATE NOT NULL,
  question_id_fk INT NOT NULL,
  stat_id_fk INT NOT NULL,
  CONSTRAINT fk_pastq_question FOREIGN KEY (question_id_fk) REFERENCES questions (question_id),
  CONSTRAINT fk_pastq_stat FOREIGN KEY (stat_id_fk) REFERENCES stats (stat_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Demo rows so /login/ can be tested (username test / password test)
INSERT INTO institutes (name, registration_code, max_members, current_members)
VALUES ('Demo Institute', 'DEMO0000000001', 100, 1);

INSERT INTO members (forename, surname, email, username, password, institute_id_fk)
VALUES ('Demo', 'User', 'demo@example.com', 'test', 'test', 1);

INSERT INTO departments (name, institute_id_fk, member_id_fk)
VALUES ('Computer Science', 1, 1);

INSERT INTO courses (name, description, programme_year, creation_date, department_id_fk)
VALUES ('Intro Course', 'Placeholder', 1, '2020-01-01', 1);
