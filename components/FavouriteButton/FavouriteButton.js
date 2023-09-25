import StarFilled from "../StarFilled/StarFilled.js";
import Star from "../Star/Star.js";
import styled from "styled-components";

export default function FavouriteButton({
  id,
  isFavourite,
  onToggleFavourite,
}) {
  return (
    <FavButton
      onClick={() => onToggleFavourite(id)}
      aria-label="favourite"
    >
      {isFavourite ? <StarFilled /> : <Star />}
    </FavButton>
  );
}

const FavButton = styled.button`
  appearance: none;
  background: none;
  border: none;
  aspect-ratio: 1;
  margin-left: 100%;
  margin-bottom: -20px;
`;
