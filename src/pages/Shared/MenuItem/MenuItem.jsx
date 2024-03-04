

const MenuItem = ({item2}) => {
    const {recipe,name,image,price} = item2;
    return (
      <div className="">
          <div className="flex space-x-4 mb-10">
          <img style={{borderRadius: '0 200px 200px 200px'}} className="w-[120px]" src={image} alt="" /> 
          <div>
            <h3 className="uppercase">{name}-----------------</h3>
            <p>{recipe}</p>
            </div> 
            <p className="text-yellow-500">$ {price}</p>
          
        </div>
        
      </div>
    );
};

export default MenuItem;