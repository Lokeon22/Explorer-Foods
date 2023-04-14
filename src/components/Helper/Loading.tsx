import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingProps {
  text?: string;
}

export function Loading({ text }: LoadingProps) {
  return (
    <div className="flex items-center flex-row gap-5">
      <AiOutlineLoading3Quarters className="w-10 h-10 animate-spin" />
      <h2>{text}</h2>
    </div>
  );
}
