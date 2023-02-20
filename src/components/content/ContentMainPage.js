import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const categories = [
  {
    name: "Auto, moto si ambarcațiuni",
    hyperlink: "/Auto-moto-ambarcațiuni",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3774/3774278.png",
    links: [
      {
        name: "Autoturisme",
        url: "/Auto-moto-ambarcațiuni/Autoturisme",
      },
      {
        name: "Autoutilitare",
        url: "/Auto-moto-ambarcațiuni/Autoutilitare",
      },
      {
        name: "Camioane - Rulote - Remorci",
        url: "/Auto-moto-ambarcațiuni/Camioane-Rulote-Remorci",
      },
      {
        name: "Motociclete - Scutere - ATV",
        url: "/Auto-moto-ambarcațiuni/Motociclete-Scutere-ATV",
      },
      {
        name: "Ambarcatiuni",
        url: "/Auto-moto-ambarcațiuni/Ambarcatiuni",
      },
      {
        name: "Piese auto",
        url: "/Auto-moto-ambarcațiuni/Piese-auto",
      },
      {
        name: "Utilaje agricole si industriale",
        url: "/Auto-moto-ambarcațiuni/Utilaje-agricole-si-industriale",
      },
    ],
  },
  {
    name: "Piese auto",
    hyperlink: "/Piese-auto",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3895/3895728.png",
    content: "...",
  },
  {
    name: "Imobiliare",
    hyperlink: "/Imobiliare",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5101/5101115.png",
  },
  {
    name: "Locuri de muncă ",
    hyperlink: "/Locuri-de-muncă",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3194/3194461.png",
  },
  {
    name: "Electonice",
    hyperlink: "/Electonice",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2777/2777154.png",
  },
  {
    name: "Electrocasnice",
    hyperlink: "/Electrocasnice",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1261/1261143.png",
  },
  {
    name: "Casă si grădina",
    hyperlink: "/Casă-si-grădina",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1887/1887372.png",
  },
  {
    name: "Mama și copilul",
    hyperlink: "/Mama-și-copilul",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1581/1581704.png",
  },
  {
    name: "Sport, arta, activitati",
    hyperlink: "/Sport-arta-activitati",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3043/3043918.png",
  },
  {
    name: "Animale de companie",
    hyperlink: "/Animale-de-companie",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3460/3460473.png",
  },
  {
    name: "Agro si Industrie",
    hyperlink: "/Agro-si-Industrie",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/5341/5341375.png",
  },
  {
    name: "Cazare-Turism",
    hyperlink: "/Cazare-Turism",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/2560/2560149.png",
  },
  {
    name: "Jocuri-Console",
    hyperlink: "/Jocuri-Console",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/3097/3097980.png",
  },
  {
    name: "Laptopuri",
    hyperlink: "/Laptopuri",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/428/428001.png",
  },
  {
    name: "Modă și frumusețe",
    hyperlink: "/Modă-și-frumusețe",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/1198/1198358.png",
  },
  {
    name: "Servicii și echipamente",
    hyperlink: "/Servicii-și-echipamente",
    imageUrl: "https://cdn-icons-png.flaticon.com/512/681/681531.png",
  },
];

export default function ContentMainPage() {
  const [openCategory, setOpenCategory] = useState(null);

  const handleCategoryClick = (index) => {
    if (index === openCategory) {
      setOpenCategory(null);
    } else {
      setOpenCategory(index);
    }
  };

  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="bg-gray-900 pt-10 sm:pt-10 sm:pb-10 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <h1 className="text-white text-4xl mb-8 font-light tracking-normal text-center">
                Categorii principale
              </h1>
            </div>
            <div className="grid grid-cols-2 mr-8 ml-0 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
              {categories.map((category, index) => (
                <div key={index} className="text-center">
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
                    <div className="bg-gray-200 p-2" style={{ width: "100vw" }}>
                      <div className="flex items-center mb-3">
                        <ChevronRightIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                        <Link to={category.hyperlink} className="mr-3">
                          <b>
                            Vezi toate anunturile din
                            {" " + category.name.toLowerCase()}
                          </b>
                        </Link>
                      </div>
                      <hr />
                      <div className="grid sm:grid-cols-2 md:sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {category.links.map((link, subIndex) => (
                          <div key={subIndex} className="flex items-center">
                            <ChevronRightIcon
                              className="m-3 h-5 w-5"
                              aria-hidden="true"
                            />
                            <a href={link.url}>{link.name}</a>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="relative bg-gray-50 pt-10 sm:pt-4 lg:pt-6">
            <div className="mx-auto max-w-7xl lg:px-8">
              <h1 className="text-black text-4xl font-light tracking-normal text-center mb-6">
                Anunturi Promovate{" "}
              </h1>
            </div>
          </div>

          <div className="relative bg-green-200 py-16 sm:py-24 lg:py-32">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="grid grid-cols-3 gap-4">
                {/* add your content here */}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
