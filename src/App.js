import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Boxes, Learn, Navbar, Newsletter, Showcase } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
    </>
  );
}

export default App;
