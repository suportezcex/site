/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";

const Radio = (props) => {
  const { register } = useFormContext();
  return (
    <div className="flex items-center">
      <input
        id={props.name}
        type="radio"
        className="font-figtree h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        value={props.value}
        {...register(props.name)}
        {...props}
      />
      <label
        htmlFor={props.name}
        className="font-figtree block text-sm font-medium leading-6 text-gray-900 ml-1"
      >
        {props.value}
      </label>
    </div>
  );
};

export default Radio;
