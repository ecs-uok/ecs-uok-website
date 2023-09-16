import PropTypes from "prop-types";

export default function Error({ marginY }) {
  return (
    <div
      className={`flex flex-col justify-center items-center text-center bg-gray-100 py-12 my-${marginY}`}
    >
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-semibold text-red-500 mb-4">
          Oops! Something went wrong.
        </h2>
        <p className="text-gray-700 text-lg">
          We apologize for the inconvenience. Please try again later.
        </p>
        {/* <button
          className="bg-red-500 hover:bg-red-600 text-white hover:text-white py-2 px-4 rounded-full focus:outline-none focus:ring focus:ring-red-400 transition-all duration-500"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button> */}
      </div>
    </div>
  );
}

Error.propTypes = {
  marginY: PropTypes.number,
};
