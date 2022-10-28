import { useState } from 'react';
import Book from './components/Book';
import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();

function App() {
  const [count, setCount] = useState(0);
  const APIKey = 'cM73cDc7wenzskKCVI6FtqngCcAKW8XI';
  const secretKey = 'wWl2VjoaLs5uWFul';

  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Book />
      </div>
    </QueryClientProvider>
  );
}

export default App;
