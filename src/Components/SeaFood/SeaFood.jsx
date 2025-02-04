import PropTypes from "prop-types";
import { Link } from "react-router";
const SeaFood = ({seafood}) => {
    const {idMeal,strMeal,strMealThumb} = seafood;
    return (
        <div className="hero bg-base-200 p-4 ">
            <div className="hero-content flex-col lg:flex-row bg-blue-200 rounded-2xl">
                <img
                src={strMealThumb}
                className="w-2/3 lg:w-1/3 rounded-4xl shadow-2xl" />
                <div>
                    <h3 className="text-3xl font-bold">{strMeal}</h3>
                    <button className="btn btn-primary">
                        <Link to={`/home/seafood/${idMeal}`}>See Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
SeaFood.propTypes = {
    seafood: PropTypes.object.isRequired
}
export default SeaFood;