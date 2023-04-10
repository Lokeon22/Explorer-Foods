interface SubTitleProps {
  text: string;
}

export function SubTitle({ text }: SubTitleProps) {
  return (
    <h2 className="text-3xl font-Poppins font-medium mt-10 mb-6 px-2">
      {text}
    </h2>
  );
}
