import React from 'react';
import { FaStar } from 'react-icons/fa';
import { useState, useEffect } from 'react';

const PlayerScoreCard = ({ scoreData }) => {
  const [rubric, setRubric] = useState(null);

  useEffect(() => {
    if (scoreData && scoreData.rubric) {
      setRubric(scoreData.rubric);
    }
  }, [scoreData]);

  if (!scoreData || !rubric) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-6">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Puntaje de Evaluación</h2>
        <div className="flex items-center mb-4">
          <FaStar size={24} className={`text-yellow-500`} />
          <span className="ml-2 text-lg font-semibold">{scoreData.score} / {rubric.max_score}</span>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold text-gray-700">Rúbrica</h3>
          <p className="text-gray-600">{rubric.name}</p>
          <p className="text-gray-500">{rubric.description}</p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-gray-700">Detalles</h3>
          <p className="text-gray-600">ID de la rúbrica: {rubric.id}</p>
          <p className="text-gray-600">ID del deporte: {rubric.id_sport}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayerScoreCard;
