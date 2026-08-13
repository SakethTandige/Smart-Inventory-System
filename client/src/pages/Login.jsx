import { BrowserRouter, Routes, Route } from "react-router-dom";
const navigate = useNavigate();
function Login() {
  return <h1>Login Page</h1>;
}

function Dashboard() {
  return <h1>Dashboard</h1>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}