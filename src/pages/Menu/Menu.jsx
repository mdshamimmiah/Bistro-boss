import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from '../../assets/menu/banner3.jpg'
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import saladImg from '../../assets/menu/salad-bg.jpg'
import soupImg from '../../assets/menu/salad-bg.jpg'
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import MenuCategory from "./menuCategory/MenuCategory";


const Menu = () => {
    const [menu] = useMenu()
    // console.log(menu);
    const desert = menu?.filter((item) => item.category === 'dessert');
    const soup = menu?.filter(item => item.category ==='soup');
    const salad = menu?.filter(item => item.category === 'salad');
    const pizza = menu?.filter(item => item.category ==='pizza');
    const offered = menu?.filter(item => item.category === 'offered');
    // console.log(offered)
    return (
        <div>
           <Helmet>
        <title>Bistro Boss | Menu</title>
        
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      
       <SectionTitle subHeading="Don't Miss" heading="Today's Offer"></SectionTitle>
       <MenuCategory items={offered}></MenuCategory>
       <MenuCategory items={desert} title="dessert" Img2={dessertImg}></MenuCategory>
       <MenuCategory items={pizza} title="pizza" Img2={pizzaImg}></MenuCategory>
       <MenuCategory items={salad} title="salad" Img2={saladImg}></MenuCategory>
       <MenuCategory items={soup} title="soup" Img2={soupImg}></MenuCategory>
        </div>
    );
};

export default Menu;