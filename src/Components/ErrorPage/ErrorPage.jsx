import { useRouteError } from "react-router";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    
    return (
        <div>
            <Header></Header>
            <h1 className="text-center w-24 mx-auto p-4 m-4 rounded-3xl  bg-warning">{error.error.message}</h1>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;