import StarFilled from "../StarFilled/StarFilled.js";
import Star from "../Star/Star.js";
import styled from "styled-components";

export default function FavouriteButton({ id, isFavourite, onToggleFavourite }) {
    return (
      <FavButton
        name="favourite-button"
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
    padding: 0;
    border-radius: 999px;
    aspect-ratio: 1;
    transition: background-color 0.2s ease-in-out;
    background-color: transparent;
    margin: -6px;
    padding: 6px;
    &:hover {
        background-color: color-water;
    }
    &:active {
        background-color: color-water-10; 
    }
    `;

