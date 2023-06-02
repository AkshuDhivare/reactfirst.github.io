
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';


function App() {
  return (
    <>
        <NavBar title="akshay" about="new-about" />
        <div className='container py-4'>
        <TextForm title="Enter  Text Here To Analyze."   />
        </div>
    </>

  );
}

export default App;

