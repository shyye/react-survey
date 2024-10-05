import PropTypes from "prop-types";

export default function Checkboxes({handleChange, spendTimeList}) {
  return (
    <ul>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="swimming"
            onChange={handleChange}
            // checked={spendTimeList.includes("swimming")}
          />
          Swimming
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="bathing"
            onChange={handleChange}
            // checked={spendTimeList.includes("bathing")}
          />
          Bathing
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="chatting"
            onChange={handleChange}
          />
          Chatting
        </label>
      </li>
      <li>
        <label>
          <input
            name="spend-time"
            type="checkbox"
            value="noTime"
            onChange={handleChange}
          />
          I don&apos;t like to spend time with it
        </label>
      </li>
    </ul>
  );
}

Checkboxes.propTypes = {
  handleChange: PropTypes.func,
  spendTimeList: PropTypes.array,
};
