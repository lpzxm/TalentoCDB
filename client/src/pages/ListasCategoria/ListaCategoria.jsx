import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThLarge } from '@fortawesome/free-solid-svg-icons';

const SUB_U17_options = [
  { value: 'SUB-15', label: 'SUB-15' },
  { value: 'SUB-17', label: 'SUB-17' },
  { value: 'SUB-19', label: 'SUB-19' },
];


export function Players() {
  const [categoryName, setCategoryName] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

  }


  return (
    <div>
      <div className="relative">
        <div className="hidden sm:block w-full h-16 bg-yellow-500"></div>
        <div className="hidden sm:block w-full h-16 bg-blue-700"></div>
      </div>



      <div className="bg-cover min-h-screen flex justify-center items-center relative " style={{ backgroundImage: "url('https://scontent.fsal10-1.fna.fbcdn.net/v/t39.30808-6/384230002_714267520743206_4010218688895427709_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a73e89&_nc_ohc=NbOu-M5PEz0AX-fyqmw&_nc_ht=scontent.fsal10-1.fna&oh=00_AfAf6pxKV5cizM7hMtAnp5sKLIShdi-lI5q2syeQje4uaw&oe=65DEE5BB')" }}>


        <div className="bg-gray-100 p-4 rounded-md absolute top-12 left-1/2 transform -translate-x-1/2 flex items-center">
          <FontAwesomeIcon icon={faThLarge} />
          <span> Registro de categoria</span></div>

        <div className="bg-gray-100 p-4 rounded-md absolute top-32 left-1/2 transform -translate-x-1/2 flex items-center">
          <span>Categorias de Voleyball</span></div>


        <div className="bg-white p-8 rounded-lg max-w-md bg-opacity-80">
          <label htmlFor="category-select" className="block mb-16">Selecciona una categoria:</label>
          <select
            id="category-select"
            value={selectedOption}
            onChange={(event) => setSelectedOption(event.target.value)}
            className="w-full p-2 mb-4 border rounded"
          >
            <option value={null}>-- SUB- --</option>
            {SUB_U17_options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}