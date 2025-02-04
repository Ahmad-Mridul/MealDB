import { useLoaderData } from "react-router";
import Chicken from "../Chicken/Chicken";

const Chickens = () => {
    const chicken = useLoaderData();
    const {meals} = chicken;
    return (
        <div className="lg:grid lg:grid-cols-3 md:grid-cols-2 md:grid">
            {
                meals.map(chicken => <Chicken key={chicken.idMeal} chicken={chicken}></Chicken>)
            }
        </div>
    );
};

export default Chickens;