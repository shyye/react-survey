import PropTypes from "prop-types";

export default function RadioButtons({handleChange, colorValue}) {
  return (
    <ul>
      <li>
        <input
          id="color-one"
          type="radio"
          name="color"
          value="1"
          onChange={handleChange}
          checked={colorValue === "1"}
        />
        <label htmlFor="color-one">1</label>
      </li>
      <li>
        <input
          id="color-two"
          type="radio"
          name="color"
          value="2"
          onChange={handleChange}
          checked={colorValue === "2"}
        />
        <label htmlFor="color-two">2</label>
      </li>
      <li>
        <input
          id="color-three"
          type="radio"
          name="color"
          value="3"
          onChange={handleChange}
          checked={colorValue === "3"}
        />
        <label htmlFor="color-three">3</label>
      </li>
      <li>
        <input
          id="color-four"
          type="radio"
          name="color"
          value="4"
          onChange={handleChange}
          checked={colorValue === "4"}
        />
        <label htmlFor="color-four">4</label>
      </li>
    </ul>
  );
}

RadioButtons.propTypes = {
  handleChange: PropTypes.func,
  colorValue: PropTypes.string
};
