

const FoodCard = ({item}) => {
    const {recipe,name,image,price} = item;
    return (
        <div>
            <div className="card card-compact w-96 mx-auto bg-base-100 shadow-xl rounded-none h-[500px]  border border-black">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className="absolute right-0 bg-black text-white -mt-[250px] px-3 mr-3">${price}</p>
                    <p>{recipe}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-outline border-0 border-b-4 mt-4 mx-auto bg-slate-200 border-orange-700">Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;