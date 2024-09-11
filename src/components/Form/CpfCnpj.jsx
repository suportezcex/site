/* eslint-disable react/prop-types */
// import PropTypes from "prop-types";

import { useState } from "react";
import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

export function CpfCnpj(props) {
  const { setValue } = useFormContext();

  const TYPES = {
    CPF: "999.999.999-999",
    CNPJ: "99.999.999/9999-99",
  };
  const MAX_LENGTH = clear(TYPES.CNPJ).length;

  const [mask, setMask] = useState(TYPES.CPF);

  const { onChange = () => {}, type = "text" } = props;

  let value = clear(props.value);

  if (value) {
    value = applyMask(value, TYPES[getMask(value)]);
  }

  function onLocalChange(ev) {
    let value = clear(ev.target.value);
    const mask = getMask(value);

    let nextLength = value.length;

    if (nextLength > MAX_LENGTH) return;

    const maskedValue = applyMask(value, TYPES[mask]);

    ev.target.value = maskedValue;

    setMask(TYPES[mask]);

    setValue(props.name, maskedValue);

    onChange(value, maskedValue);
  }

  function getMask(value) {
    if (value) {
      return value.length > 11 ? "CNPJ" : "CPF";
    }
  }

  function applyMask(value, mask) {
    let result = "";

    let inc = 0;
    Array.from(value).forEach((letter, index) => {
      if (!mask[index + inc].match(/[0-9]/)) {
        result += mask[index + inc];
        inc++;
      }
      result += letter;
    });

    return result;
  }

  function clear(value) {
    return value && value.replace(/[^0-9]/g, "");
  }

  return (
    <InputMask
      {...props}
      mask={mask}
      type={type}
      value={value}
      onChange={onLocalChange}
      className="font-figtree block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    />
  );
}

// CpfCnpj.propTypes = {
//   value: PropTypes.string,
//   onChange: PropTypes.func,
// };

// CpfCnpj.defaultProps = {
//   type: "tel",
//   value: "",
//   onChange: () => {},
// };
