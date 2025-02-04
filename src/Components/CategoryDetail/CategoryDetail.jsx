import PropTypes from "prop-types";
import { useNavigate } from "react-router";
const CategoryDetail = ({category}) => {
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="p-4">
            <div className="text-center bg-blue-300 mx-auto  rounded-2xl p-12">
                <img className="mx-auto w-96" src={category.strCategoryThumb}/>
                <h2 className="text-4xl">{category.strCategory}</h2>
                <p className="font-bold">{category.strCategoryDescription}</p>
                <button className="btn btn-outline btn-warning" onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};
CategoryDetail.propTypes = {
    category: PropTypes.object.isRequired
}
export default CategoryDetail;