interface ButtonProps {
  text: string;
  loadingText?: string;
  isLoading?: boolean;
}

export const Button = ({
  text,
  isLoading,
  loadingText = "Carregando...",
}: ButtonProps) => {
  return (
    <button
      className="bg-[#750310] w-full h-12 rounded py-3 px-8 hover:bg-[#73010e] hover:text-[#c5c5c5] duration-300 mb-4 md:mb-8 font-Poppins font-medium"
      type="submit"
      disabled={isLoading}
    >
      {isLoading ? loadingText : text}
    </button>
  );
};
