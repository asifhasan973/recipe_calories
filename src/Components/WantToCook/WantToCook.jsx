import PropTypes from 'prop-types';
const WantToCook = ({ item, idx, handlePreparing }) => {
  const {
    recipe_name,

    preparing_time,
    calories,
  } = item;

  return (
    <>
      <tr className="hover text-gray-500">
        <th>{idx + 1}</th>
        <td>{recipe_name}</td>
        <td>{calories} calories</td>
        <td>{preparing_time} minutes</td>
        <td>
          <button
            onClick={() => handlePreparing(item)}
            className="btn bg-[#0BE58A] font-normal rounded-full text-[#150B2B]"
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};

export default WantToCook;

WantToCook.propTypes = {
  item: PropTypes.object,
  idx: PropTypes.number,
  handlePreparing: PropTypes.func,
};
