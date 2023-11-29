import Menu from "./components/menu/Menu.jsx";
import CreateQuestionsPage from "./pages/CreateQuestions/CreateQuestionsPage.jsx";
import MainPage from "./pages/MainPage/MainPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Menu />,
    children: [
      {
        path: "/",
        element:<MainPage />
      },
      {
        path: "/createQuestions",
        element: <CreateQuestionsPage />,
      },
    ],
  }
]);



function App() {
  return (
      <RouterProvider router={router} />
  );
}

export default App;
