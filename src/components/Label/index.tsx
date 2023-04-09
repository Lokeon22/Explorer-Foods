interface LabelProps {
  id: string;
  text: string;
}

export function Label({ id, text }: LabelProps) {
  return (
    <label className="text-[#C4C4CC] font-Roboto" htmlFor={id}>
      {text}
    </label>
  );
}
