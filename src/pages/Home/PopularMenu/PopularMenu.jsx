import { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    // console.log(menu);
    // const [menu, setMenu] = useState([]);
    // console.log(menu);
    const filtered = menu?.filter((item) => item.category ==='popular')
    // console.log(filtered);
    // useEffect(()=>{
    //         fetch('menu.json')
    //         .then(res => res.json())
    //         .then(data => setMenu(data))
    // },[])
    return (
        <div>
           <SectionTitle heading="From Our Menu" subHeading="Popular Items">
            </SectionTitle> 
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {
                filtered?.map((item2) => <MenuItem key={item2._id} item2={item2}></MenuItem>)
            }
            
            </div>
            <div className="text-center">
           <button className="btn btn-outline border-0 border-b-4">View Full Menu</button>
        </div>
        </div>
    );
};

export default PopularMenu;