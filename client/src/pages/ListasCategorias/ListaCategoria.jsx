import React from 'react';

const SUB_U17_options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];


function RegisterCategoryForm() {
  const [categoryName, setCategoryName] = React.useState('');
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="category-name-input">Label Text:</label>
      <input
        type="text"
        id="category-name-input"
        value={categoryName}
        onChange={(event) => setCategoryName(event.target.value)}
      />

      <label htmlFor="category-select">Select an option:</label>
      <select
        id="category-select"
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
      >
        <option value={null}>-- Select an option --</option>
        {SUB_U17_options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterCategoryForm;





