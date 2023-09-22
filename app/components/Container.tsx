const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`mx-auto w-[90vw] max-w-[80rem] ${className} `}>
      {children}
    </div>
  );
};
export default Container;
