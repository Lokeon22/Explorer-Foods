interface TitleProps {
  text: string;
}

export function Title({ text }: TitleProps) {
  return (
    <h2 className="hidden sm:block font-medium text-2xl sm:text-3xl text-center mb-8 font-Poppins">
      {text}
    </h2>
  );
}
