import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllCourses } from '../services/api';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const { data } = await getAllCourses();
        setCourses(data);
      } catch (err) {
        setError(err.response?.data?.error || 'Erreur lors du chargement des cours');
      }
    };
    fetchCourses();
  }, []);

  return (
    <div>
      <h2>Liste des cours</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {courses.map((course) => (
          <li key={course._id}>
            {/* Lien vers la page de détail du cours */}
            <Link to={`/courses/${course._id}`}>{course.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
