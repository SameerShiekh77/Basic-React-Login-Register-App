import './App.css';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login';
import Register from './components/register';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
function App() {
  return (
  <>
    <Router>
      <nav>

      <Link to='/login'>Login</Link>
      <Link to='/register'>Registration</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />}>Login</Route>
        <Route path='/register' element={<Register/>}>Registration</Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
