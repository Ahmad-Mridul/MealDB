import { useLoaderData } from "react-router";
import Beef from "../Beef/Beef";

const Beefs = () => {
    const seafoods = useLoaderData();
    const {meals} = seafoods;
    return (
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 md:grid">
            {
                meals.map(seafood => <Beef key={seafood.idMeal} seafood={seafood}></Beef>)
            }
        </div>
    );
};

export default Beefs;