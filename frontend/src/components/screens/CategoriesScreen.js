import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import axios from "axios";

const CategoriesScreen = () => {
    
    const [openCategory, setOpenCategory] = useState(null);
    const [categories, setCategories]= useState([])

    const handleCategoryClick = (index) => {
      setOpenCategory((prevIndex) => (prevIndex === index ? null : index));
    };
  
    useEffect(() => {
        const fetchCategories = async () => {
          try {
            const { data } = await axios.get("/categories");
            setCategories(data);
          } catch (error) {
            console.log(error);
          }
        };
        fetchCategories();
      }, []);

    return (
        <div className="bg-gray-900 pt-10 sm:pt-10 sm:pb-10 lg:overflow-hidden lg:pt-8 lg:pb-14">
        <div className="mx-auto max-w-7xl lg:px-8">
          <h1 className="text-white text-4xl mb-8 font-light tracking-normal text-center">
            Categorii principale
          </h1>
        </div>
        <div className="grid grid-cols-2 mr-8 ml-0 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
          {categories.map((category, index) => (
            <div key={category.id} className="text-center">
              <button
                onClick={() => handleCategoryClick(index)}
                className="items-center justify-center"
              >
                <img
                  className="mx-auto h-16 w-16 flex-shrink-0"
                  src={category.imageUrl}
                  alt={category.name}
                />
                <h3 className="mt-2 text-xl font-thin text-white text-center">
                  {category.name}
                </h3>
              </button>
              {openCategory === index && (
                <div className="bg-gray-700 p-2" style={{ width: "30vw" }}>
                  <div className="flex items-center mb-2">
                    <Link
                      to={category.hyperlink}
                      className="hover:text-green-500"
                    >
                      <b>
                        Vezi toate anunturile din
                        {" " + category.name.toLowerCase()}
                      </b>
                    </Link>
                  </div>
                  <hr />
                  <div className="grid sm:grid-cols-1 md:sm:grid-cols-1 lg:grid-cols-1 gap-3">
                    {category.links.map((link) => (
                      <div key={link.name} className="flex items-center">
                        <ChevronRightIcon
                          className="m-3 h-5 w-5"
                          aria-hidden="true"
                        />
                        <Link
                          to={link.url}
                          className="text-base text-white hover:text-green-500"
                        >
                          {link.name}
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    )
}

export default CategoriesScreen