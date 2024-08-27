import { useEffect, useState } from 'react';
import Recipies from '../Recipies/Recipies';
import WantToCook from '../WantToCook/WantToCook';
import PreparingItems from '../PreparingItems/PreparingItems';

const OurRecipies = () => {
  let [recipies, setRecipies] = useState([]);
  useEffect(() => {
    fetch('../../../public/foods.json')
      .then((res) => res.json())
      .then((data) => setRecipies(data));
  }, []);
  let [cookItems, setCookItems] = useState([]);
  const handleCook = (item) => {
    let newItem = [...cookItems, item];
    setCookItems(newItem);
  };
  // preparing
  let [preparingItems, setPreparingItems] = useState([]);
  const handlePreparing = (item) => {
    let newItem = [...preparingItems, item];
    setPreparingItems(newItem);

    let updatedCookItems = cookItems.filter(
      (items) => items.recipe_id != item.recipe_id
    );
    setCookItems(updatedCookItems);
  };
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
        <div className="grid grid-cols-1 lg:grid-cols-12 my-16">
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-7">
              {recipies.map((recipe) => (
                <Recipies
                  key={recipe.recipe_id}
                  handleCook={handleCook}
                  recipe={recipe}
                ></Recipies>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-5">
            {/* want to cook  */}
            <div>
              <h1 className="text-2xl font-semibold text-center mb-10">
                Want to cook: {cookItems.length}
              </h1>
              <div className="mx-10">
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr className="text-base">
                        <th></th>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Time</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cookItems.map((item, idx) => (
                        <WantToCook
                          item={item}
                          idx={idx}
                          key={idx}
                          handlePreparing={handlePreparing}
                        ></WantToCook>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            {/* Currently cooking  */}
            <div>
              <h1 className="text-2xl font-semibold text-center mt-20 m-8">
                Currently cooking: {preparingItems.length}
              </h1>
              <div className="mx-10">
                <div className="overflow-x-auto">
                  <table className="table">
                    <thead>
                      <tr className="text-base">
                        <th></th>
                        <th>Name</th>
                        <th>Calories</th>
                        <th>Time</th>
                        <th> </th>
                      </tr>
                    </thead>
                    <tbody>
                      {preparingItems.map((item, idx) => (
                        <PreparingItems
                          item={item}
                          idx={idx}
                          key={idx}
                        ></PreparingItems>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
export default OurRecipies;
