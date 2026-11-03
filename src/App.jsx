
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState('');

  function handleRegister(e) {
    e.preventDefault();

    if (!name.trim() || !course.trim()) {
      setMessage('Please fill in all fields correctly.');
      return;
    }

    const newStudent = {
      id: Date.now(),
      name: name.trim(),
      course: course.trim()
    };

    setStudents([...students, newStudent]);
    setName('');
    setCourse('');
    setMessage('Student registered successfully!');
  }

  function handleDelete(id) {
    setStudents(students.filter(student => student.id !== id));
    setMessage('Student deleted successfully!');
  }

  return (
    <div className="app">
      <header className="header">
        <h1>Student Registration</h1>
        <p>Student Management Portal</p>
      </header>

      <main className="container">
        <section className="welcome">
          <h2>Welcome to Student Registration</h2>
          <p>Register students and manage their courses easily.</p>
        </section>

        <section className="form-card">
          <h2>Register a Student</h2>

          <form onSubmit={handleRegister}>
            <label htmlFor="student-name">Student Name</label>
            <input
              id="student-name"
              type="text"
              placeholder="Enter student's full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label htmlFor="student-course">Course</label>
            <input
              id="student-course"
              type="text"
              placeholder="Enter course name"
              value={course}
              onChange={(e) => setCourse(e.target.value)}
              required
            />

            <button type="submit">Register Student</button>
          </form>

          {message && (
            <p className="message" role="status">
              {message}
            </p>
          )}
        </section>

        <section className="students-card">
          <h2>Registered Students</h2>

          <div className="student-count">
            Total Students: {students.length}
          </div>

          {students.length === 0 ? (
            <div className="empty">
              <p>No students registered yet.</p>
              <span>Registered students will appear here.</span>
            </div>
          ) : (
            students.map((student) => (
              <div className="student-item" key={student.id}>
                <div>
                  <h3>{student.name}</h3>
                  <p>{student.course}</p>
                </div>

                <button
                  className="delete-btn"
                  onClick={() => handleDelete(student.id)}
                  type="button"
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </section>
      </main>

      <footer>
        <p>Student Registration App © 2026</p>
      </footer>
    </div>
  );
}

export default App;
