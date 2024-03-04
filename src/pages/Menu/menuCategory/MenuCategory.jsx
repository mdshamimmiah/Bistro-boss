/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({items,title,Img2}) => {
    // console.log(Img2);
    return (
        <div>
             { title && <Cover img={Img2} title={title}></Cover>}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 mx-auto">
          
                {
                    items?.map(item => <MenuItem key={item._id} item2={item}></MenuItem>)
                }
           
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
            </Link>
        </div>
    );
};

export default MenuCategory;