import { useEffect } from 'react';

type UseIntersectionObserverProps = {
  className: string;
  inViewClassName: string;
  threshold?: number;
};

const useIntersectionObserver = (props: UseIntersectionObserverProps) => {
  const { className, inViewClassName, threshold = 0 } = props;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(inViewClassName);
          }
        });
      },
      { threshold },
    );

    const elements = document.querySelectorAll(`.${className}`);
    elements.forEach((element) => observer.observe(element));

    // Cleanup function
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [className, inViewClassName]);
};

export default useIntersectionObserver;
