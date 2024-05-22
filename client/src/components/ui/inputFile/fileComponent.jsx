import { useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { MdOutlineAddPhotoAlternate } from "react-icons/md";

export const FileUpload = ({ label, file, onFileChange, onFileRemove }) => {
    const fileInputRef = useRef(null);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.type.match('image.*')) {
            onFileChange(selectedFile);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const selectedFile = e.dataTransfer.files[0];
        if (selectedFile && selectedFile.type.match('image.*')) {
            onFileChange(selectedFile);
        }
    };

    return (
        <div
            className="flex flex-col items-center justify-center border-2 border-dashed border-gray-400 w-72 h-64 rounded-lg cursor-pointer hover:border-gray-600 relative"
            onClick={handleClick}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            {!file ? (
                <div className="flex flex-col items-center justify-center h-full">
                    <MdOutlineAddPhotoAlternate size="54px" className="text-gray-500" />
                    <p className="mt-4 text-gray-600 text-center">{label}</p>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full">
                    <img
                        src={URL.createObjectURL(file)}
                        alt="Preview"
                        className="w-24 h-24 object-cover rounded-lg mb-2"
                    />
                    <p className="text-center text-gray-600 text-sm">{file.name}</p>
                    <button
                        className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
                        onClick={(e) => {
                            e.stopPropagation();
                            onFileRemove();
                        }}
                    >
                        <AiOutlineClose size="20px" />
                    </button>
                </div>
            )}
            <input
                type="file"
                accept=".png, .jpg, .jpeg"
                ref={fileInputRef}
                className="hidden"
                onChange={handleFileChange}
            />
        </div>
    );
};
