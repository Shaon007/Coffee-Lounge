 import { Link } from 'react-router-dom';
import coffee from '../assets/images/icons/1.png'
import Coffee from './Coffee';
import Hero from './Hero';
import Footer from './Footer';
function PopularProducts({ coffees,changeState }) {
  return (
    <div>
      <Hero/>
      <div className="text-center bg-neutral-100 py-10 text-xl shadow-md">
        <p>--- Sip & Savor ---</p>
        <h2 className="font-bold text-[#331A15] text-4xl my-3">
          Our Popular Products
        </h2>
        <div className="flex justify-center">
          <Link to='/addcoffee'>
            <button className="flex gap-2 items-center text-xl border-2 border-[#331A15] px-4 py-2  mt-3 rounded-md bg-[#E3B577] text-white">
              Add Coffee <img className="w-6" src={coffee} alt="" />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 max-w-6xl mx-auto mt-6 md:mt-10 pb-10">
        {coffees.map(coffee => (
          <Coffee key={coffee._id} coffee={coffee} changeState={changeState}/>
        ))}
      </div>
      <Footer/>
    </div>
  );
}

export default PopularProducts