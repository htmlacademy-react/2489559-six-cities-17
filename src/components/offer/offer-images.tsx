type OfferImagesProps = {
  images: string[] | null;
}

function OfferImages(props: OfferImagesProps): JSX.Element {
  const { images } = props;
  return (
    <div className="offer__gallery-container container">
      <div className="offer__gallery">
        {images && images.map((element) => (
          <div className="offer__image-wrapper" key={element}>
            <img className="offer__image" src={element} alt="Photo studio" />
          </div>
        ))}
      </div>
    </div >
  );
}

export default OfferImages;
