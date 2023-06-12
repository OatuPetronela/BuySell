const ErrorMessage = ({ children }) => {
  return (
    <section className=" border-red-700 text-black p-2">
      <header className="border-2 border-red-600 p-2 text-center bg-red-300 rounded-sm">
        ⚠ Oops! An error occurred.{" "}
      </header>
      <div className="p-2 mt-2 text-center border-2 bg-red-300 border-red-600 rounded-sm">
        {children}
      </div>
    </section>
  );
};

export default ErrorMessage;
