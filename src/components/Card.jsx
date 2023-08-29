import PropTypes from "prop-types";

export default function Card({ cardImage, cardTitle, cardDesc }) {
  return (
    <div className="cursor-pointer w-[80%] h-[480px] lg:w-[640px] lg:h-[480px] border rounded-2xl overflow-hidden relative">
      <img
        className="w-full h-full object-cover"
        src={cardImage}
        alt={`${cardTitle} card image`}
      />
      <div className="flex flex-col justify-center text-white p-4 w-full h-full top-0 right-0 absolute bg-overlay backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity duration-700">
        <h1 className="text-xl uppercase font-bold">{cardTitle}</h1>
        <p className="text-lg pt-4">{cardDesc}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  cardImage: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  cardDesc: PropTypes.string.isRequired,
};
