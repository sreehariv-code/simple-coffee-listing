import star_fill from "../assets/dccl--frontend-simple-coffee-listing/Star_fill.svg";
import start_empty from "../assets/dccl--frontend-simple-coffee-listing/Star.svg";
import PropTypes from "prop-types";
const Card = ({ name, rating, price, image, popular, votes, available }) => {
  return (
    <div className="max-w-[340px] aspect-[3/3.2]  overflow-hidden  flex flex-col">
      <div className="relative flex image-section">
        <img
          src={image}
          alt="coffee image"
          className="object-cover w-full rounded-lg"
        />
        {popular ? (
          <p className="absolute px-2 py-1 tag bg-tag left-2 top-2 text-Price rounded-2xl">
            Popular
          </p>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col gap-1.5 mt-3 content">
        <div className="flex justify-between first">
          <p className="label text-text-primary">{name}</p>
          <p className="px-1 price bg-accent py-0.5 rounded-sm">{price}</p>
        </div>
        <div className="flex justify-between second">
          <p className="flex rating">
            <span className="mr-1">
              <img
                src={rating === null ? start_empty : star_fill}
                alt="rating star rated "
              />
            </span>
            <span className="mr-1.5 text-text-primary">
              {rating === null ? "No Rating" : rating}
            </span>
            {rating !== null && (
              <span className="text-text-secondary">({votes} votes)</span>
            )}
          </p>
          {!available ? <p className="status text-alert">Sold out</p> : ""}
        </div>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string,
  rating: PropTypes.string,
  image: PropTypes.string,
  popular: PropTypes.bool,
  available: PropTypes.bool,
  votes: PropTypes.string,
  price: PropTypes.string,
};
