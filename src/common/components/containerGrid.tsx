const ContainerGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-charactersCards place-items-center gap-8 space-y-6 md:space-y-0 md:p-20">
      {children}
    </div>
  );
};

export default ContainerGrid;
