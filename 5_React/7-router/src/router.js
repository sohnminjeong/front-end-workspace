import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Create from "./pages/Create";
import Layout from "./components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />, // error페이지 만들어서 에러 시 해당 페이지로 연결
    children: [
      { index: true, element: <Home /> },
      { path: "create", element: <Create /> },
    ],
    // children은 배열-객체 형식 [{}]
    // children에 적은 element가 layout.js에서 outlet 해당
  },
  {
    path: "/create",
    element: <Create />,
  },
]);

export default router;
