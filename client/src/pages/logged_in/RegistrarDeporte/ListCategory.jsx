import { BiCategoryAlt } from "react-icons/bi";


import img1 from "../../../assets/sub-u13_u18.png";
import img2 from "../../../assets/sub-u15.png";
import img3 from "../../../assets/sub-u17.png";

const categories = [
  { title: "SUB-U13", image: img1 },
  { title: "SUB-U15", image: img2 },
  { title: "SUB-U17", image: img3 },
  { title: "SUB-U18", image: img1 }
];


const CategoryCard = ({ title, image }) => (
  <div className="m-3 md:m-6 md:w-96 lg:w-96 transform transition-transform hover:scale-105 hover:rotate-3">
    <div className="border rounded-lg overflow-hidden shadow-slate-200">
      <div className="p-2">
        <p className="text-center font-medium mb-2">{title}</p>
        <img className="h-full w-full object-cover rounded p-4 md:w-auto" src={image} alt="" />
      </div>
    </div>
  </div>
);


export const ViewCategories = () => {


  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center gap-6 border-solid border-2 border-amber-300 w-fit my-6 p-4">
          <BiCategoryAlt size="25px" />
          <p className="font-semibold text-2xl">Listado de categorias</p>
        </div>
        <div className="outline rounded outline-offset-2 outline-gray-200 md:w-80 flex justify-center gap-16 p-4 mb-8">
          <h1 className="font-bold text-xl">Categorias de Baloncesto</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {categories.map((category, index) => (
          <CategoryCard key={index} title={category.title} image={category.image} />
        ))}
      </div>
    </>
  );
} 