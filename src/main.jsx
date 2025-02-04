import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import App from "./App";
import Meals from "./Components/Meals/Meals";
import Contact from "./Components/Contact/Contact";
import Chickens from "./Components/Chickens/Chickens";
import SeaFoods from "./Components/SeaFoods/SeaFoods";
import Beefs from "./Components/Beefs/Beefs";
import CategoriesDetails from "./Components/CategoriesDetails/CategoriesDetails";
import SingleMealDataF from "./Components/SingleMealDataF/SingleMealDataF";
import ErrorPage from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path:"/",
      element: <App></App>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:'/home/chicken',
          loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=chicken'),
          element:<Chickens></Chickens>
        },
        {
          path:'/home/chicken/:idMeal',
          loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
          element:<SingleMealDataF></SingleMealDataF>
        },
        {
          path:'/home/seafood',
          loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=seafood'),
          element:<SeaFoods></SeaFoods>
        },
        {
          path:'/home/seafood/:idMeal',
          loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
          element:<SingleMealDataF></SingleMealDataF>
        },
        {
          path:'/home/beef',
          loader:()=>fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=beef'),
          element:<Beefs></Beefs>
        },
        {
          path:'/home/beef/:idMeal',
          loader:({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.idMeal}`),
          element:<SingleMealDataF></SingleMealDataF>
        },

      ]
    },
    {
      path:"/meals",
      loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      element:<Meals></Meals>
    },
    {
      path:"/meals/:idCategory",
      loader:()=> fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
      element:<CategoriesDetails></CategoriesDetails>
    },
    {
      path:"/contact",
      element:<Contact></Contact>
    }
])
createRoot(document.getElementById("root")).render(
  
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
