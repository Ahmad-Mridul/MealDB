import { useLoaderData } from "react-router";
import SeaFood from "../SeaFood/SeaFood";

const SeaFoods = () => {
    const seafoods = useLoaderData();
    const {meals} = seafoods;
    return (
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 md:grid">
            {
                meals.map(seafood => <SeaFood key={seafood.idMeal} seafood={seafood}></SeaFood>)
            }
        </div>
    );
};

export default SeaFoods;