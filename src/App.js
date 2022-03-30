import React from 'react'
import { useGlobalContext } from './context';
import PageContent from './Components/PageContent'
import './App.css';


function App() {
  const { loading } = useGlobalContext()
  
  return (
    <main className='mt-12 mb-12'>
      <h1 className='text-center tracking-widest capitalize header relative text-5xl pb-5 font-black'>
        {loading ? "loading..." : "pagination"}
      </h1>
      <div>
        {
          loading || <PageContent />
        }
      </div>

    </main>
  );
}

export default App;
