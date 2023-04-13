const Loader = () => {
  return (
    <div className="flex">
      <div
        className=" mr-4 flex-shrink-0 self-end h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] text-pink-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status"
      ></div>
    </div>
  );
};

export default Loader;
