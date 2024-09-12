/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";

const CheckBox = ({ options, name, ...props }) => {
  const { register } = useFormContext();

  return (
    <div className="flex items-center flex-wrap">
      {options.map((elem, index) => (
        <div className="flex items-center" key={index}>
          <input
            id={`${name}_${elem.key}_${index}`}
            type="checkbox"
            className="font-figtree h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            value={elem.value}
            {...register(name)}
            {...props}
          />
          <label
            htmlFor={`${name}_${elem.key}_${index}`}
            className="font-figtree block text-sm font-medium leading-6 text-gray-900 ml-1 mr-2"
          >
            {elem.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
