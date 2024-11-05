import ReactDOM from 'react-dom/client';
// Todo: Bring in the appropriate imports
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

// import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Bringing in the pages the router will use to conditionally show the appropriate views
import App from './App';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PortfolioPage from './pages/PortfolioPage';
import ResumePage from './pages/ResumePage';

const router = createBrowserRouter([
  {
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      // Both are on purpose.
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      }
    ]
  }
]);

// Render the RouterProvider component
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
