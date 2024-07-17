import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  id: string;
}
const Section = ({ children, className, id }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-5",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Section;
