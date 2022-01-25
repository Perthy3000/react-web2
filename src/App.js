import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Boxes, Instructor, Learn, Navbar, Newsletter, Question, Showcase } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <Learn />
      <Question />
      <Instructor />
    </>
  );
}

export default App;
