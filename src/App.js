import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Boxes, Contact, Instructor, Learn, Navbar, Newsletter, Question, Showcase } from './components';

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
      <Contact />
    </>
  );
}

export default App;
