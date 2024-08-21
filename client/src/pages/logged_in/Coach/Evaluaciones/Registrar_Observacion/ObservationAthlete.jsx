import React, { useState } from 'react';

export const ObservationAthlete = () => {
    const backgroundImage = 'https://scontent-gua1-1.xx.fbcdn.net/v/t39.30808-6/453387999_901552668681356_8860159141904411930_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=VttaKdEEyqoQ7kNvgE4RaF8&_nc_ht=scontent-gua1-1.xx&oh=00_AYBUJqFMkdMHS5dPnJOnUNxTRly7t9mPOUcDbQarXjOSWA&oe=66CBD3E0';

    const [formData, setFormData] = useState({
        athleteName: '',
        observationDate: '',
        observation: '',
        file: null
    });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
    };

    return (
        <>
            <div className="relative flex justify-center items-center min-h-screen bg-gray-100 p-1 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: `url(${backgroundImage})`, filter: 'blur(8px)' }}>
                </div>

                    <div className="relative max-w-lg w-full bg-white p-4 rounded-lg shadow-md dark:bg-white dark:text-black">
                        <div className='border-2 border-dashed border-amber-400 p-6 rounded-xl'>
                        <h2 className="text-2xl font-semibold mb-4">Observación del Atleta</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="athleteName" className="block text-sm font-medium text-gray-700">Nombre del Atleta</label>
                                <input
                                    type="text"
                                    id="athleteName"
                                    name="athleteName"
                                    value={formData.athleteName}
                                    onChange={handleChange}
                                    className="mt-1 block w-full rounded-md shadow-sm border-1 border solid border-gray-300 "
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="observation" className="block text-sm font-medium text-gray-700">Observación</label>
                                <textarea
                                    id="observation"
                                    name="observation"
                                    value={formData.observation}
                                    onChange={handleChange}
                                    rows="4"
                                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm border solid"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};
