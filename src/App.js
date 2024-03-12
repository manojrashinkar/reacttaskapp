import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import EditUser from './components/EditUser';
import ListUser from './components/ListUser';

function App() {
  return (
    <div className="App">
      <h5>React Task App</h5>

      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/">Task List </Link>
            </li>
            <li>
              <Link to="user/create">Create Task</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index element={<ListUser />} />
          <Route path="user/create" element={<CreateUser />} />
          <Route path="user/:id/edit" element={<EditUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
