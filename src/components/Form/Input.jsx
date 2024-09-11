/* eslint-disable react/prop-types */
import { useFormContext } from "react-hook-form";

export function Input(props) {
  const { register } = useFormContext();

  return (
    <input
      id={props.name}
      className="font-figtree block w-full rounded-md border-0 py-1.5 px-2  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      {...register(props.name)}
      {...props}
    />
  );
}
