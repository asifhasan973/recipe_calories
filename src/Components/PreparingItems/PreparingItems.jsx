import PropTypes from 'prop-types';
const PreparingItems = ({ item, idx }) => {
  const { recipe_name, preparing_time, calories } = item;

  return (
    <tr className="hover text-gray-500">
      <th>{idx + 1}</th>
      <td>{recipe_name}</td>
      <td>{calories} calories</td>
      <td>{preparing_time} minutes</td>
    </tr>
  );
};

export default PreparingItems;

PreparingItems.propTypes = {
  item: PropTypes.object,
  idx: PropTypes.number,
};
