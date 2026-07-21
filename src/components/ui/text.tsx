const varDict = {
  h1: "scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
  h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  Lead: "text-xl text-muted-foreground",
  Large: "text-lg font-semibold",
  Small: "text-sm leading-none font-medium",
  Muted: "text-sm text-muted-foreground",
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
    <div 
      className={className ? varDict[variant] + ' ' + className : varDict[variant]}
      {...props}
    >
      {children}
    </div>
  );
}