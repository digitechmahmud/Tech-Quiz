import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import Home from './components/Home/Home';
import Quizdetails from './components/Quizdetails/Quizdetails';
import Statistics from './components/Statistics/Statistics';
import Main from './Layouts/Main';
import Errorpage from './components/Errorpage/Errorpage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <Errorpage></Errorpage>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/home',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          } ,
          element:<Quizdetails></Quizdetails>
        },
        {
          path: '/statistics',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statistics></Statistics>
        },
        {
          path: '/blogs',
          element:<Blogs></Blogs>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
