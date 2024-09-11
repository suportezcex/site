export function Label(props) {
  return (
    <label
      className="font-figtree block text-sm font-medium leading-6 text-gray-900"
      {...props}
    >
      {props.children}
      {props.required ? <span className="ml-1 text-red-700">*</span> : null}
    </label>
  );
}
