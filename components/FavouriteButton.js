import StarFilled from "./StarFilled.js";
import Star from "./Star.js";

export default function FavouriteButton({ id, isFavourite, onToggleFavourite }) {
    return (
      <button
        name="favourite-button"
        onClick={() => onToggleFavourite(id)}
        aria-label="favourite"
      >
        {isFavourite ? <StarFilled /> : <Star />}
      </button>
    );
  }