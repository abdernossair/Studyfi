import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../services/api';

const CourseDetail = () => {
  const { id } = useParams();  // Récupère le :id de l’URL
  const [course, setCourse] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const { data } = await getCourseById(id);
        setCourse(data);
      } catch (err) {
        setError(err.response?.data?.error || 'Erreur lors du chargement du cours');
      }
    };
    fetchCourse();
  }, [id]);

  if (error) {
    return <p style={{ color: 'red' }}>{error}</p>;
  }

  if (!course) {
    return <p>Chargement...</p>;
  }

  return (
    <div>
      <h2>{course.title}</h2>
      <p><strong>Description: </strong>{course.description}</p>
      <p><strong>Prix: </strong>{course.price} €</p>

      {course.content && course.content.map((section, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <h3>Section: {section.sectionTitle}</h3>
          {section.lectures.map((lecture, i) => (
            <div key={i} style={{ paddingLeft: '20px' }}>
              <p>Titre: {lecture.title}</p>
              <p>Durée: {lecture.duration} minutes</p>
              <p>Ressources: {lecture.resources?.join(', ')}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CourseDetail;
