import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { Table } from './components/Table/Table';
const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
      <Table/>
    </div>
  </QueryClientProvider>
  );
}

export default App;
