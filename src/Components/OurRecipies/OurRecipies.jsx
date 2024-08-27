import { useEffect, useState } from 'react';
import Recipies from '../Recipies/Recipies';

const OurRecipies = () => {
  let [recipies, setRecipies] = useState([]);
  useEffect(() => {
    fetch('../../../public/foods.json')
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <div className="mt-32 mb-20">
        <div className="text-center w-2/3 mx-auto">
          <h1 className="text-4xl font-bold my-5">Our Recipies</h1>
          <p className="text-lg text-gray-500">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.
          </p>
        </div>
        {/* recipies start  */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-7">
              {recipies.map((recipe) => (
                <Recipies key={recipe.recipe_id} recipe={recipe}></Recipies>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5"></div>
        </div>
      </div>
    </div>
  );
};
export default OurRecipies;
