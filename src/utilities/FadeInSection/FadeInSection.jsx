import './FadeInSection.scss';
import React from 'react';
const FadeInSection = (props) => {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const domRefCopy = domRef.current;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // if (entry.isIntersecting) {
        setVisible(entry.isIntersecting);
        // }
      });
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRefCopy);
  }, []);
  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
};
export default FadeInSection;
