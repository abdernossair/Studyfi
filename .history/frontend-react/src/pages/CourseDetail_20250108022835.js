import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCourseById } from '../services/api';

const CourseDetail = () => {
  const { id } = useParams();
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
    return <p className="text-red-500 p-4">{error}</p>;
  }

  if (!course) {
    return <p className="p-4">Chargement...</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Image du cours */}
        <img
          src="https://images.unsplash.com/photo-1579154202081-c68521991cec?auto=format&w=800&q=80"
          alt="course detail"
          className="w-full md:w-1/3 h-64 object-cover rounded"
        />
        
        {/* Détails du cours */}
        <div className="md:w-2/3">
          <h2 className="text-3xl font-bold mb-2">{course.title}</h2>
          <p className="text-gray-600 mb-4">{course.description}</p>
          <p className="text-xl font-semibold mb-6">
            Prix : 
            <span className="ml-2 text-blue-600">
              {course.price === 0 ? 'Gratuit' : `${course.price} €`}
            </span>
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition font-semibold">
            S'inscrire / Acheter
          </button>
        </div>
      </div>

      {/* Sections / Leçons */}
      <div className="mt-8">
        <h3 className="text-2xl font-bold mb-4">Contenu du cours</h3>
        {course.content && course.content.map((section, idx) => (
          <div key={idx} className="mb-6 bg-gray-100 p-4 rounded shadow">
            <h4 className="text-xl font-semibold mb-2">{section.sectionTitle}</h4>
            {section.lectures.map((lecture, i) => (
              <div key={i} className="border-b py-2">
                <p className="font-medium">{lecture.title}</p>
                <p className="text-sm text-gray-600">
                  Durée : {lecture.duration} min
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
