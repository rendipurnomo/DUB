import Flickity from "react-flickity-component";

const flickityOptions = {
  initialIndex: 0,
  pageDots: true,
};
const Banner = () => {
  return (
    <div className="my-10">
      <Flickity
        className={"carousel-cell"} // default ''
        elementType={"div"} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={false} // default false
        reloadOnUpdate // default false
        static // default false
      >
        <img
          className="px-12 object-cover object-center rounded-3xl w-[80%] h-[300px]"
          src="https://source.unsplash.com/random"
          alt="banner"
        />
        <img
          className="px-12 object-cover object-center rounded-3xl w-[80%] h-[300px]"
          src="https://source.unsplash.com/random"
          alt="banner"
        />
        <img
          className="px-12 object-cover object-center rounded-3xl w-[80%] h-[300px]"
          src="https://source.unsplash.com/random"
          alt="banner"
        />
      </Flickity>
    </div>
  );
};

export default Banner;
