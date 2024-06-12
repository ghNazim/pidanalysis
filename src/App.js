
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from './Components/Layout';
import { DataProvider } from "./Contexts/DataContext";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Layout />
      </DataProvider>
    </div>
  );
}

export default App;
