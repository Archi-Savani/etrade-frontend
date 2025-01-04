function SlickNextArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`slide-arrow next-arrow ${className}`} onClick={onClick}>
      <i className="fal fa-long-arrow-right"></i>
    </button>
  );
}

function SlickPrevArrow(props) {
  const { className, onClick } = props;
  return (
    <button className={`slide-arrow prev-arrow ${className}`} onClick={onClick}>
      <i className="fal fa-long-arrow-left"></i>
    </button>
  );
}

function SlickNextAngle(props) {
  const { className, onClick } = props;
  return (
    <button className={`slide-arrow next-arrow ${className}`} onClick={onClick}>
      <i className="fal fa-angle-right"></i>
    </button>
  );
}

function SlickPrevAngle(props) {
  const { className, onClick } = props;
  return (
    <button className={`slide-arrow prev-arrow ${className}`} onClick={onClick}>
      <i className="fal fa-angle-left"></i>
    </button>
  );
}

export { SlickNextArrow, SlickPrevArrow, SlickNextAngle, SlickPrevAngle };
