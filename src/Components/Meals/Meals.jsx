import { useLoaderData } from "react-router";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Meal from "../Meal/Meal";

const Meals = () => {
    const allMeals = useLoaderData();
    const {categories} = allMeals;
    return (
        <div>
            <Header></Header>
            <div className="p-4 lg:grid lg:grid-cols-3 lg:gap-4">
                {
                    categories.map(category =><Meal key={category.idCategory} category={category}></Meal>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Meals;