import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from './components/Home';
import EditCounter1 from './components/EditCounter1';
import EditCounter2 from './components/EditCounter2';
import EditCounter3 from './components/EditCounter3';
import EditCounter4 from './components/EditCounter4';

function App() {
  const routerObj = createBrowserRouter([
    { path: "/", element: < Home /> },
    { path: "/counter1", element: <EditCounter1 /> },
    { path: "/counter2", element: <EditCounter2 /> },
    { path: "/counter3", element: <EditCounter3 /> },
    { path: "/counter4", element: <EditCounter4 /> }
  ]);

  return (
    <div>
      <RouterProvider router={routerObj} />
    </div>
  )
}

export default App