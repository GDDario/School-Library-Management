import React from "react";
import "../styles/checkbox.css";

const Checkbox = ({textString}) => (
    <label className="container">
        {textString}
        <input type="checkbox"/>
        <span className="checkmark"></span>
    </label>
);

export default Checkbox;

