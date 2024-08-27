import PropTypes from 'prop-types';
import { SlClock } from 'react-icons/sl';
import { FaFire } from 'react-icons/fa';
const Recipies = ({ recipe, handleCook }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <div className="">
      <div className="card border border-[#28282833] h-full">
        <figure className="px-6 pt-6">
          <img src={recipe_image} alt={recipe_name} className="rounded-xl" />
        </figure>
        <div className="card-body  ">
          <h2 className="card-title">{recipe_name}</h2>
          <p className="text-gray-400">{short_description}</p>
          <hr />
          {/* ingredients  */}
          <div>
            <h3 className="text-lg ">Ingredients: {ingredients.length}</h3>
            <ul className="list-disc list-inside ms-3 text-gray-500 mt-4 mb-2">
              {ingredients.map((data, idx) => (
                <li key={idx}>{data}</li>
              ))}
            </ul>
          </div>
          <hr />
          <div className="my-5 flex justify-between items-center text-[#282828CC]">
            <div className="flex items-center justify-center">
              <h4 className="">
                <SlClock className="text-xl me-2" />
              </h4>
              <h4>{preparing_time} minutes</h4>
            </div>
            <div className="flex items-center justify-center">
              <h4 className="">
                <FaFire className="inline text-xl me-2" />
              </h4>
              <h4>{calories} calories</h4>
            </div>
          </div>

          <div className="card-actions">
            <button
              onClick={() => handleCook(recipe)}
              className="btn bg-green-500 font-normal rounded-full text-[#150B2B] px-6"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipies;

Recipies.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleCook: PropTypes.func.isRequired,
};
