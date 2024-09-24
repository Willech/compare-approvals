interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex overflow-x-scroll">
      <div className="w-full max-w-4xl mx-auto my-5 p-4">
        <div className="flex flex-col items-center space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
