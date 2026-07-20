import { createBrowserRouter, Navigate } from "react-router-dom";
import New from "@/pages/New";
import Layout from "@/pages/Layout";
import Month from "@/pages/Month";
import Year from "@/pages/Year";

export const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    {
      index: true,
      element: <Navigate to="/month" replace />
    }, {
      path: '/month',
      element: <Month />
    }, {
      path: '/year',
      element: <Year />
    }
  ]

}, {
  path: '/new',
  element: <New />

}])
