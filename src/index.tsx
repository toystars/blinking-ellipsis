import React, { FC, ReactNode, useCallback, useEffect } from 'react';

export type DotDotDotProps = {
  duration?: number;
  maxDots?: number;
  dotComponent?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export const DotDotDot: FC<DotDotDotProps> = ({ duration = 450, maxDots = 3, dotComponent, className, children }) => {
  const [dots, setDots] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prevDots) => prevDots < maxDots ? prevDots + 1 : 0)
    } , duration);

    return () => clearInterval(interval);
  }, []);

  const renderDots = useCallback(() => {
    if (!dotComponent) return Array(dots).fill('.').join('');

    return Array.from({ length: dots }).map((_, index) => (
      <span key={index}>{dotComponent}</span>
    ));
  }, [dotComponent, dots]);

  return (
    <span className={className}>
      {children}
      {renderDots()}
    </span>
  );
};
