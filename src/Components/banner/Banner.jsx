import "./banner.css";

const Banner = ({ image, video, heading, para, reverse }) => {
  return (
    <>
      <div className="single-banner">
        <div className={`single ${reverse && "reverse"}`}>
          <div className="content-banner">
            <h1>{heading}</h1>
            <p>{para}</p>
          </div>
          <div className="image-section">
            <img src={image} alt="banner" className="banner-image" />
            {/* {video && (
          <div className="video">
            <video src={video} alt="video varala" muted autoplay loop />
          </div>
        )} */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Banner;
