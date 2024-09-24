import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import MainLayout from './components/layout/MainLayout';
import CompanyMain from './components/CompanyMain';

function App() {

  const queryClient = new QueryClient()
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <div className='w-full h-full mt-4 justify-center center'>
          <MainLayout>
            <CompanyMain />
          </MainLayout>
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
