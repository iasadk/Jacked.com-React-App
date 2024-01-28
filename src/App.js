import './App.css';
import { Box } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ExerciseDetails from './Pages/ExerciseDetails';
import Footer from './Components/Footer';
import Login from './Pages/Login';
function App() {
  return (
    <div className="App">
      <Box width="400px" sx={{ width: { xl: '1448px' } }} m="auto">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/exercise/:id' element={<ExerciseDetails />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer />
      </Box>
    </div>
  );
}

export default App;
