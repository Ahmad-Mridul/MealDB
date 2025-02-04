import { Outlet, useNavigation } from "react-router";
import "./App.css";
import CategoryMenu from "./Components/CategoryMenu/CategoryMenu";
import Hero from "./Components/Hero/Hero";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
function App() {
  const navigation = useNavigation();
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <CategoryMenu></CategoryMenu>
      {
        navigation.state == "loading" ? 
        <div className="flex items-center justify-center"><span className=" loading loading-bars loading-lg"></span></div> :
        <Outlet></Outlet>
      }
      
      <Footer></Footer>
    </>
  );
}

export default App;
