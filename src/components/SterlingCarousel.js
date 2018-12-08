import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import styled from 'styled-components'
import Img from 'gatsby-image'

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "50%",
      }}
      onClick={onClick}
    />
  );
}
class SterlingCarousel extends React.Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      focusOnSelect: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />
      // rows: 2,
      // slidesPerRow: 1,
    }

    return (
      <Section>
        <Slider1 {...settings}>
          {
            this.props.sterlingCarousel.map(pic => (
              <Div1 key={pic.node.id}>
                <Img1
                  fluid={pic.node.childImageSharp.fluid}
                />
              </Div1>
            ))
          }
        </Slider1>
      </Section>
    );
  }
}

const Section = styled.section`
      margin-top: 5rem;
      display: flex;
      align-items: center;
      height: 100%;
`
const Div1 = styled.div`
      display: flex;
      align-items: center;
      height: 100%;
`
const Img1 = styled(Img)`
      width: 95%;
      height: 95%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      border-radius: 5px;
      box-shadow: 1px 1px 5px black;
`
const Slider1 = styled(Slider)`
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      vertical-align: center;
      text-align: center;
      width: 80%;
      margin: 0 auto;
      color: black;
`

export default SterlingCarousel
