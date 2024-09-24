interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex overflow-x-scroll">
      <div className="my-2">
        <div className="flex flex-col">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
