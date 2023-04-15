interface ErrorProps {
  text: string;
}

export function Error({ text }: ErrorProps) {
  return (
    <h2 className="text-xl text-white font-Poppins font-medium">{text}</h2>
  );
}
