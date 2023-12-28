const MainContainer = ({ children }) => {
  return (
    <div className=" px-5 py-[30px] sm:px-12 md:px-[120px] w-full overflow-y-hidden">
      {children}
    </div>
  );
};

export default MainContainer;
