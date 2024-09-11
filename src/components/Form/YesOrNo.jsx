/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";

export function YesOrNo(props) {
  const { register } = useFormContext();

  const options = [
    { key: "yes", value: "Sim", label: "Sim" },
    { key: "no", value: "Não", label: "Não" },
  ];

  return (
    <div className="flex items-center">
      {options.map((elem, index) => (
        <div className="flex items-center" key={index}>
          <input
            id={`${props.name}_${props.key}_${index}`}
            type="radio"
            className="font-figtree h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
            value={elem.value}
            {...register(props.name)}
            {...props}
          />
          <label
            htmlFor={`${props.name}_${props.key}_${index}`}
            className="font-figtree block text-sm font-medium leading-6 text-gray-900 ml-1 mr-2"
          >
            {elem.label}
          </label>
        </div>
      ))}
    </div>
  );
}
