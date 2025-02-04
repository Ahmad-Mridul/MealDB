import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router";
const Meal = ({ category }) => {
    const {idCategory,strCategoryThumb,strCategory,strCategoryDescription} = category;
    const navigate = useNavigate();
    const handleShowDetails = () => {
        navigate(`/meals/${idCategory}`); 
    };
    return (
        <div className="card shadow-xl mb-4 bg-blue-300">
            <figure>
                <img
                    src={strCategoryThumb}
                    alt="Shoes"
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{strCategory}</h2>
                <p>{strCategoryDescription}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary" onClick={handleShowDetails}>
                        <Link>Show Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};
Meal.propTypes = {
    category: PropTypes.object.isRequired,
};
export default Meal;
