import PropTypes from "prop-types";

export default function CarouselCard({ cardImage, cardTitle, cardLink }) {
  return (
    <a href={cardLink} target="_blank" rel="noreferrer">
      <div className="bg-gray-200 rounded-lg drop-shadow-md p-8 m-4 ring ring-primary">
        <img
          className="aspect-square object-cover"
          src={cardImage}
          alt={`${cardTitle} card image`}
        />
        <h1 className="text-xl font-bold pt-8 text-center">{cardTitle}</h1>
      </div>
    </a>
  );
}

CarouselCard.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardLink: PropTypes.string.isRequired,
};
