import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import data from './data/fakeData.json'
import GetUsers from './components/GetUsers';

const bookings = data

function App() {
  return (
    <GetUsers results={bookings}/>
  );
}

export default App;
