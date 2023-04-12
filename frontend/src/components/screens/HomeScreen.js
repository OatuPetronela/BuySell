import CategoriesScreen from "./CategoriesScreen";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <main>
            <CategoriesScreen />
            <div className="relative bg-gray-50 pt-10 sm:pt-4 lg:pt-6">
              <div className="mx-auto max-w-7xl lg:px-8">
                <h1 className="text-black text-4xl font-light tracking-normal text-center mb-6">
                  Anunturi Promovate{" "}
                </h1>
              </div>
            </div>

            <div className="relative bg-green-200 py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="grid grid-cols-3 gap-4">{/*content page*/}</div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomeScreen;
