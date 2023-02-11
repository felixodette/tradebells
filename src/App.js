import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="w-screen h-auto flex flex-col bg-primary">
      <Header />
      <main className='mt-24 p-8 w-full'>

        {/* Routes */}
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>

      </main>
    </div>
  );
}

export default App;
