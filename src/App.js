import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import AddStudent from './components/AddStudent';
import StudentList from './StudentList';
import UpdateStudent from './components/UpdateStudent';
import AddFacuilty from './components/AddFacuilty';
import FacuiltyList from './components/FacuiltyList';
import UpdateFacuilty from './components/UpdateFacuilty';
import { default as Login } from './Auth/Login';
import { default as Signup } from './Auth/Signup';

let myRouter = createBrowserRouter([
  {
    path: '/',
    Component: Login, // Set Login as the root component
  },
  {
    path: '/signup',
    Component: Signup, // Add the Signup route
  },
  {
    path: '/dashboard',
    Component: Dashboard,
    children: [
      { path: 'addStudent', Component: AddStudent },
      { path: '', Component: StudentList },
      { path: 'studentList', Component: StudentList },
      { path: 'updateStudent', Component: UpdateStudent },
      { path: 'addFacuilty', Component: AddFacuilty },
      { path: 'updateFacuilty', Component: UpdateFacuilty },
      { path: 'FacuiltyList', Component: FacuiltyList },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={myRouter}>
    </RouterProvider>
  );
}

export default App;