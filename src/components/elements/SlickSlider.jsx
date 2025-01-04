'use client';
import { forwardRef } from "react";
import Slider from "react-slick";
import { SlickNextAngle, SlickNextArrow, SlickPrevAngle, SlickPrevArrow } from "../elements/SlickArrows";


const SlickSlider = forwardRef((props, ref) => {

    const Settings = {
		dots: props.dots ?? false,
		arrows: props.arrows ?? true,
		infinite: props.infinite ?? true,
		speed: props.speed ?? 500,
		slidesToShow: props.slidesToShow ?? 3,
		slidesToScroll: props.slidesToScroll ?? 1,
        fade: props.fade ?? false,
        autoplay: props.autoplay ?? false,
        autoplaySpeed: props.autoplaySpeed ?? 1500,
        focusOnSelect: props.focusOnSelect ?? false,
        draggable: props.draggable ?? true,
        vertical: props.vertical ?? false,
        adaptiveHeight: props.adaptiveHeight ?? false,
        centerMode: props.centerMode ?? false,
        centerPadding: props.centerPadding ?? "0",
        rows: props.rows ?? 1,
        nextArrow: props.navAngle ? <SlickNextAngle /> : <SlickNextArrow />,
        prevArrow: props.navAngle ? <SlickPrevAngle /> : <SlickPrevArrow />,
        responsive: props.responsive
	  };

    return ( 
        <Slider {...Settings} asNavFor={props.asNavFor ?? ""} ref={ref} className={props.class}>
            {props.children}
        </Slider>
    );
});

SlickSlider.displayName = 'SlickSlider';
 
export default SlickSlider;