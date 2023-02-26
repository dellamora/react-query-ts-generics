const ContainerGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-charactersCards place-items-center gap-8 md:p-20">
      {children}
    </div>
  );
};

export default ContainerGrid;
