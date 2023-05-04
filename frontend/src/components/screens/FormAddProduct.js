import Navbar from "components/navbar/Navbar";
import Footer from "components/footer/Footer";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import axios from "axios";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const DropDownButton = ({ categories, setSelectedCategory }) => {
  const [selectedCategory, setSelected] = useState(null);

  const handleSelectCategory = (category) => {
    setSelected(category);
    setSelectedCategory(category);
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <br />
        <Menu.Button className="inline-flex w-full justify-center gap-x-28 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          {selectedCategory ? selectedCategory.name : "Categories*"}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-96 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1 grid grid-cols-2 gap-2">
            {categories.map((category) => (
              <Menu.Item key={category.id}>
                {({ active }) => (
                  <li
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block px-4 py-2 text-sm cursor-pointer"
                    )}
                    onClick={() => handleSelectCategory(category)}
                  >
                    {category.name}
                  </li>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const FormAddProduct = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get("/categories");
        setCategories(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCategories();
  }, []);

  const handleFileChange = (event) => {
    setImageUrl(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("imageUrl", imageUrl);
    if (selectedCategory !== null) {
      formData.append("category", selectedCategory.name);
    }

    axios
      .post("/products", formData)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));

    setTitle("");
    setDescription("");
    setImageUrl("");
    setSelectedCategory({ name: "Categories*" });
  };

  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center mt-4 font-semibold leading-9 text-gray-900">
        Publica anuntul tau acum
      </h1>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-6xl">
        <div className=" bg-gray-100 py-8 px-4 shadow sm:rounded-lg sm:px-12">
          <form onSubmit={handleSubmit}>
            <div className="space-y-14">
              <div className="border-b border-gray-900/10 pb-12">
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-4">
                    <label
                      htmlFor="title"
                      className="block text-md font-medium leading-6 text-gray-900"
                    >
                      Adauga titlu*
                    </label>
                    <div className="mt-2">
                      <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                        <input
                          type="text"
                          name="title"
                          value={title}
                          onChange={(event) => setTitle(event.target.value)}
                          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                          placeholder="ex.: iPhone 14, încă în garanție"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="sm:col-span-6">
                    <DropDownButton
                      categories={categories}
                      selectedCategory={selectedCategory}
                      setSelectedCategory={setSelectedCategory}
                    />
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="description"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Descriere
                    </label>
                    <div className="mt-2">
                      <textarea
                        name="description"
                        rows={4}
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                        className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:p-1 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                        defaultValue={""}
                        placeholder="Încearcă să scrii ce ai vrea tu să afli dacă te-ai uita la acest anunț"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="cover-photo"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Imagini
                    </label>
                    <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                      <div className="text-center">
                        <PhotoIcon
                          className="mx-auto h-12 w-12 text-gray-300"
                          aria-hidden="true"
                        />
                        <div className="mt-4 flex text-sm leading-6 text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                          >
                            <span>Adauga imagini</span>
                            <input
                              id="file-upload"
                              type="file"
                              onChange={handleFileChange}
                              className="sr-only"
                            />
                            {imageUrl && (
                              <img
                                src={URL.createObjectURL(imageUrl)}
                                alt="Thumb"
                              />
                            )}
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs leading-5 text-gray-600">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Previzualizare anunt
              </button>
              <button
                type="submit"
                value="Submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Publica anuntul
              </button>
            </div>
          </form>
        </div>
      </div>
      <hr className="mt-8" />
      <Footer />
    </>
  );
};

export default FormAddProduct;
