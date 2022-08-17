import './App.css';
import Login from './Login';
import Footer from './Footer'
import Header from './Header';
import Landing from './Landing';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/login" element={<Login />} />
          <Route
        path="*"
        element={
            <main style={{padding: "1rem"}}>
                <p>Fitness Senior – 404 Sorry, the requested page could not be found. If you believe this is an error, please contact support@sensiorfitness.com.</p>
            </main>
        }

        />
        </Routes>
        < Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
