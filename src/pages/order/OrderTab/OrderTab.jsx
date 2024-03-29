/* eslint-disable react/prop-types */
import FoodCard from "../../../Component/FoodCard/FoodCard";


const OrderTab = ({item}) => {
    return (
        <div>
             <div className='grid grid-cols-1 md:grid-cols-3 gap-4 '>
      {
            item?.map((item) => <FoodCard key={item._id} item={item}></FoodCard>)
        }
      </div>
        </div>
    );
};

export default OrderTab;