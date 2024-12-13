import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    // errorElement:<ErrorPage></ErrorPage>,

    // As You want ro create Nested Router so you use this children router flow to below this way
    // নেস্টেড রাউটার তৈরি করতে চাইলে, আপনি children রাউটারের সাহায্যে এটি করতে পারেন

    // children: [
    //   {
    //     path: "/user",
    //     loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
    //     element: <Users />,
    //   },
    //   {
    //     path: "/about",
    //     loader: () => fetch("https://reqres.in/api/users"),
    //     element: <About />,
    //   },
    // As you want to loade data to using this way
    //   {
    //     path: "/user/:userId",
    //     element: <UserAbout />,
    //     loader: ({ params }) =>
    //       fetch(`https://reqres.in/api/users/${params.userId}`),
    //   },
    //   {
    //     path: "/post",
    //     element: <Posts></Posts>,
    //     loader: () => fetch("https://jsonplaceholder.typicode.com/posts"),
    //   },
    //  If you want to loadeing data for individually in ID waise so you using this way

    // আপনি যদি আইডি অনুযায়ী আলাদাভাবে ডেটা লোড করতে চান, তাহলে নিচের পদ্ধতিগুলো অনুসরণ করতে পারেন:
    //   {
    //     path:"/post/:postId",
    //     element: <PostDetails></PostDetails>,
    //     loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    //   }
    // ],
  },
]);


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);