import './App.css';
import Calender from './components/Calender.jsx';

function App() {
  return (
    <div className="container mx-auto">
      <div className="bg-gray-100 m-4 sm:m-10 p-4 shadow rounded">
        <Calender />
      </div>
    </div>
  );
}

export default App;
