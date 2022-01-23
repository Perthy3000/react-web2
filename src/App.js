import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Boxes, Navbar, Newsletter, Showcase } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
    </>
  );
}

export default App;
