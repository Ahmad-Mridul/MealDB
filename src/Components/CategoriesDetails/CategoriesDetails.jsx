import { useLoaderData, useParams } from "react-router";
import MealDetail from "../CategoryDetail/CategoryDetail";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const CategoriesDetails = () => {
    const { idCategory } = useParams();
    const meals = useLoaderData();
    
    return (
        <div>
            <Header></Header>
            {
                meals.categories.map(category => category.idCategory === idCategory && <MealDetail key={category.idCategory} category={category}></MealDetail>)
            }
            <Footer></Footer>
        </div>
    );
    
};

export default CategoriesDetails;