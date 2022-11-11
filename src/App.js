import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import About from './components/About/About'
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Portfolo from './components/Portfolo/Portfolo';


let router = createBrowserRouter([
  {path:'/', element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'contact',element:<Contact/>},
    {path:'protfolo',element:<Portfolo/>},
  ]}
])
function App() {
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
