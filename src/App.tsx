import './App.css';
import { Form } from './components/Form';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
function App() {
  return (
    <div className='App'>
      <Form />
    </div>
  );
}

export default App;
