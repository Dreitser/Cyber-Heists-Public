import Slider from "react-slick";
import { Slide, Fade } from "react-awesome-reveal";

function SliderTwo() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    center: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          SlidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          sidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  // useEffect(()=>{
  // new WOW.WOW({
  //   boxClass: 'wow',
  // 	animateClass: 'animated',
  // 	offset: 0,
  // 	mobile: false,
  // 	live: true,
  //   loop:Infinity,
  // }).init();

  // },[])

  return (
    <section className="slider-area">
      <Slider className="slider-active" {...settings}>
        <div className="single-slider slider-bg slider-style-two">
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content ">
                  <Fade direction={"up"} delay={0.4}>
                    <h6>dreitser games presents</h6>
                  </Fade>

                  <Fade direction={"up"} delay={0.5}>
                    <h2>
                    CYBER <span>HEISTS</span> 
                    </h2>
                  </Fade>
                  <Fade direction={"up"} delay={0.5}>
                    <p>
                    Futuristic, High Stakes Art Heist 
Multiplayer Co-Op ROUGELIKE 
Made in Unreal
Free-to-Play
 Non-Obligitory NFT
                    </p>
                  </Fade>

                  <Fade direction={"up"} delay={0.8}>
                    <a href="/#" className="btn btn-style-two">
                      READ MORE
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          {/* <Slide className="slide-test" direction={"right"} delay={0.4}>
            <div className="slider-img">
              <img src="assets/img/slider/slider_img01.png" alt="" />
            </div>
          </Slide> */}
          <Slide direction={"left"} delay={0.4}>
            <div className="slider-img slider-img2 wow slideInRightS">
              <img src="assets/img/slider/slider_img02.png" alt="" />
            </div>
          </Slide>
          <div className="slider-circle-shape">
            <img
              src="assets/img/slider/slider_circle.png"
              alt=""
              className="rotateme"
            />
          </div>
        </div>
        <div
          className="single-slider slider-bg slider-style-two"
          style={{ backgroundImage: "url(assets/img/slider/slider_bg.jpg)" }}
        >
          <div className="container-fluid container-full-padding">
            <div className="row">
              <div className="col-xl-6 col-lg-7 col-md-11">
                <div className="slider-content">
                  <Fade direction={"up"} delay={0.4}>
                    <h6>dreitser games presents</h6>
                  </Fade>
                  <Fade direction={"up"} delay={0.5}>
                    <h2>
                      CYBER <span>HEISTS</span> 
                    </h2>
                  </Fade>
                  <Fade direction={"up"} delay={0.5}>
                    <p>
 Futuristic, High Stakes Art Heist 
Multiplayer Co-Op ROUGELIKE 
Made in Unreal
Free-to-Play
 Non-Obligitory NFT
                    </p>
                  </Fade>
                  <Fade direction={"up"} delay={0.8}>
                    <a href="/#" className="btn btn-style-two">
                      READ MORE
                    </a>
                  </Fade>
                </div>
              </div>
            </div>
          </div>
          <Slide direction={"right"} delay={0.4}>
            <div className="slider-img">
              <img src="assets/img/slider/slider_img01.png" alt="" />
            </div>
          </Slide>
          <Slide direction={"left"} delay={0.4}>
            <div className="slider-img slider-img2">
              <img src="assets/img/slider/slider_img02.png" alt="" />
            </div>
          </Slide>
          <div className="slider-circle-shape">
            <img
              src="assets/img/slider/slider_circle.png"
              alt=""
              className="rotateme"
            />
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default SliderTwo;
