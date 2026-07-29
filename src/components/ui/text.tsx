const varDict = {
  h1: "font-[500] text-[2rem] leading-[2.25rem]",
  h2: "font-[500] text-[1.25rem] leading-[1.375rem]",
  sub1: "font-[500] text-[1.125rem] leading-[1.25rem]",
  sub2: "font-[500] text-[1rem] leading-[1.125rem]",
  p: "font-[400] text-[0.875rem] leading-[1.25rem]",
  p2: "font-[400] text-[0.875rem] leading-[1rem]",
  btn: "font-[500] text-[0.875rem] leading-[1rem]",
  cap1: "font-[400] text-[0.75rem] leading-[0.875rem] text-gray-500",
  cap2: "font-[700] text-[0.75rem] leading-[0.875rem]",
  cap3: "font-[500] text-[0.75rem] leading-[0.875rem]",
};

export default function Text(
  {
    variant, children, className, ...props
  }: {
    variant: keyof typeof varDict,
    children: React.ReactNode,
    className?: string,
    [key: string]: any
  }
): React.ReactElement {
  return (
    <span 
      className={className ? varDict[variant] + ' ' + className : varDict[variant]}
      {...props}
    >
      {children}
    </span>
  );
}