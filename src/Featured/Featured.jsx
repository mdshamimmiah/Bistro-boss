import SectionTitle from "../Component/SectionTitle/SectionTitle";
import featured from '../../src/assets/home/featured.jpg'
import './Feature.css'
const Featured = () => {
    return (
        <div className="feature-item text-white bg-fixed">
            <SectionTitle subHeading="check it out" heading="Featured Item"></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 bg-slate-500 bg-opacity-40">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-8">
                    <p>Aug 20, 2019</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus pariatur atque suscipit dolor. Rerum culpa, sit quidem exercitationem libero tempore amet laudantium recusandae molestiae delectus. Tenetur perferendis, nulla eum quod temporibus accusantium expedita eaque earum labore quidem nihil eveniet. Iusto aliquam fuga sint placeat, quod sapiente dolore hic laborum numquam.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;