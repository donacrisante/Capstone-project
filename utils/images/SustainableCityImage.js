import Image from "next/image";
import SustainableCity from "./SustainableCity.jpg";

export default function SustainableCityImage() {
    return (
        <Image src={SustainableCity} width={180} height={180}/>
    )
}



/* const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; // Ensure the image fills the container without distortion
`; */

/* const SustainableCityImageElement = styled.img`
  width: 80px; // Adjust the size as needed
  height: 80px; // Adjust the size as needed
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1; // Ensure the image is above the progress bar
`; */