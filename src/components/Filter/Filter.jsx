import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  const handleChange = ({ target }) => {
    onChange(target.value);
  };

  return <input type="text" value={value} onChange={handleChange} />;
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
