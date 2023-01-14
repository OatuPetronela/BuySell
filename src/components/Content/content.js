const categories = [
  {
    name: 'Auto, moto si ambarcațiuni',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/3774/3774278.png',
  },
    {
    name: 'Piese auto',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/3895/3895728.png',
  },
    {
    name: 'Imobiliare',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/5101/5101115.png',
  },
      {
    name: 'Locuri de muncă ',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/3194/3194461.png',
  },
      {
    name: 'Electonice',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/2777/2777154.png',
  },
      {
    name: 'Electrocasnice',
    hyperlink:"0",
    imageUrl:
      'https://cdn-icons-png.flaticon.com/512/1261/1261143.png',
  },
      {
    name: 'Casă si grădina',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/1887/1887372.png',
  },
      {
    name: 'Mama și copilul',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/1581/1581704.png',
  },
      {
    name: 'Sport, arta, activitati',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/3043/3043918.png',
  },
      {
    name: 'Animale de companie',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/3460/3460473.png',
  },
      {
    name: 'Agro si Industrie',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/5341/5341375.png',
  },
      {
    name: 'Cazare-Turism',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/2560/2560149.png',
  },
      {
    name: 'Jocuri-Console',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/3097/3097980.png',
  },
      {
    name: 'Laptopuri',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/428/428001.png',
  },
      {
    name: 'Modă și frumusețe',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/1198/1198358.png',
  },
      {
    name: 'Servicii și echipamente',
    hyperlink:"0",
    imageUrl:'https://cdn-icons-png.flaticon.com/512/681/681531.png',
  },
]


export default function Content() {
  return (
    <div className="bg-white">
      <div className="relative overflow-hidden">
        <main>
          <div className="bg-gray-900 pt-10 sm:pt-16 lg:overflow-hidden lg:pt-8 lg:pb-14">
            <div className="mx-auto max-w-7xl lg:px-8">
              <h1 className="text-white text-4xl mb-8 font-light tracking-normal text-center">
                Categorii principale
              </h1>
            </div>
            <div className="grid grid-cols-2 mr-8 ml-8 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8">
              {categories.map((category) => (
                <a href={category.hyperlink}>
                  <img
                    className="mx-auto h-16 w-16 flex-shrink-0"
                    src={category.imageUrl}
                    alt={category.name}
                  />
                  <h3 className="mt-2 text-xl font-thin text-white text-center ">
                    {category.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
          <div className="relative bg-gray-50 pt-10 sm:pt-4 lg:pt-6">
            <div className="mx-auto max-w-7xl lg:px-8">
              <h1 className="text-black text-4xl font-light tracking-normal text-center mb-6">
                Anunturi Promovate{" "}
              </h1>
              {/* I need to add content */}
            </div>
          </div>

          <div className="relative bg-green-200 py-16 sm:py-24 lg:py-32">
            {/* I need to add content */}
          </div>
        </main>
      </div>
    </div>
  );
}
