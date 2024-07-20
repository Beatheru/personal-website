import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
  id: string;
  title?: string;
}
const Section = ({ children, className, id, title }: Props) => {
  return (
    <div
      id={id}
      className={cn(
        "flex w-full flex-col items-center justify-center gap-5",
        className
      )}
    >
      {title && (
        <div className="text-5xl font-extrabold text-yellow-400">{title}</div>
      )}
      {children}
    </div>
  );
};

export default Section;
