import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

const SUB_U17_options = [
  { value: 'SUB-15', label: 'SUB-15' },
  { value: 'SUB-17', label: 'SUB-17' },
  { value: 'SUB-19', label: 'SUB-19' },
];
const CATEGORY_OPTIONS = [
  { value: 'baloncesto', label: 'Categoría Baloncesto' },
  { value: 'balonmano', label: 'Categoría Balonmano' },
  { value: 'voleyball', label: 'Categoría Voleyball' },
  { value: 'futbol', label: 'Categoría Fútbol' },
];

export const Players = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleCreateCategory = () => {
    console.log('Categoría creada:', selectedOption);
  };

  return (
    <div className="bg-cover min-h-screen flex justify-center items-center p-4" 
         style={{ backgroundImage: "url('https://s3-alpha-sig.figma.com/img/292b/d2ee/d3991299ce0a1f70d9193922085fc4fe?Expires=1716768000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NumKSIzYUXn3rsnonHVCM4Y5qnSgSkMSg5YY9ydBhaKZ5El6xPVr4aSb3bkykkcL2HHN62UX1Dl3JJiu9hnljt3kGv5iLVlVVgqt5HNqg9lyDSGgewzEbtInNZsNhJW2vBrY8C8OJT8G7ymG4VV-jBzRiFqMIk-rfYAj0CkW6iDu4gRC91yFyWmJF7zqiAgyg9ESgJkQzladb9xfzq6QodeGM-p4gQp0p-P1P4UDzOXX3zvh9z15U-JkyH0CPg0B6oWlgra77pb3puhEiQyi20KoplW4ErHg1vaGCei~uFInNHvbzidJy~daG7X5TX8ELjmB5ULnPzRtXPddHl-SmQ__')" }}>
      <div className="w-full max-w-4xl">
        <div className="bg-yellow-400 p-4 rounded-md flex items-center space-x-2 mb-4">
          <FontAwesomeIcon icon={faThLarge} />
          <span>Registro de categoría</span>
        </div>

        <select
          value={selectedOption}
          onChange={(event) => setSelectedOption(event.target.value)}
          className="bg-blue-500 text-yellow-400 p-4 rounded-md w-full mb-4"
        >
          <option value="">Seleccionar categoria</option>
          {CATEGORY_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        <div className="bg-white p-4 rounded-lg shadow-md">
          <label htmlFor="category-select" className="block mb-4">Nombre de la categoria:</label>
          <input type="text" placeholder="" 
                 className="w-full p-2 mb-4 border rounded"/>
          <select
            id="category-select"
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value="">-- Selecciona una opción --</option>
            {SUB_U17_options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <button
            onClick={handleCreateCategory}
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
          >
            Crear Categoría
          </button>
        </div>
      </div>
    </div>
  );
}
