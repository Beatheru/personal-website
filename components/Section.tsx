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
      className={cn("flex w-full items-center justify-center", className)}
    >
      {children}
    </div>
  );
};

export default Section;
