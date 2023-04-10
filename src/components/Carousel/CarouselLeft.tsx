import { FiChevronLeft } from "react-icons/fi";

interface CarouselProps {
  carousel: React.MutableRefObject<HTMLDivElement | null>;
}

export const Carouselleft = ({ carousel }: CarouselProps) => {
  const handleLeftClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carousel.current)
      carousel.current.scrollLeft -= carousel.current.offsetWidth / 2;
  };

  return (
    <button
      className="px-1 hover:text-gray-400 duration-300 hidden sm:block"
      onClick={handleLeftClick}
    >
      {<FiChevronLeft size={32} />}
    </button>
  );
};
