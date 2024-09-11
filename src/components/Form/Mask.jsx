import { useFormContext } from "react-hook-form";
import InputMask from "react-input-mask";

export function Mask(props) {
  const { register } = useFormContext();

  return (
    <InputMask
      id={props.name}
      className="font-figtree block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      mask={props.mask}
      maskChar={null} // Importante para não adicionar caracteres "extras"
      alwaysShowMask={false} // Importante para alterar a máscara ao atingir o 12º dígito
      {...register(props.name)}
      {...props}
    />
  );
}
