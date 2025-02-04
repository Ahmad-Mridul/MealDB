import { useLoaderData, useNavigate } from "react-router";

const SingleMealDataF = () => {
    const meal = useLoaderData()
    const {strArea,strCategory,strMeal,strMealThumb,strInstructions} = meal.meals[0];
    const navigate = useNavigate();
    const handleGoBack = () => {
        navigate(-1);
    }
    return (
        <div className="p-4">
            <div className="text-center bg-blue-300 mx-auto  rounded-2xl p-12">
                <img className="mx-auto rounded-2xl" src={strMealThumb}/>
                <h2 className="text-4xl">Category: {strCategory}</h2>
                <h2 className="text-4xl">Origin: {strArea}</h2>
                <h2 className="text-4xl">Item: {strMeal}</h2>
                <p className="font-bold">{strInstructions}</p>
                <button className="btn btn-outline btn-warning" onClick={handleGoBack}>Go Back</button>
            </div>
        </div>
    );
};

export default SingleMealDataF;