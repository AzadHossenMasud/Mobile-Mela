import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Route/Route';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className=" max-w-[1440px] mx-auto">
          <RouterProvider router={router} />
          <Toaster />

    </div>
  );
}

export default App;
