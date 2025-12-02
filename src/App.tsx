import { Testimonial } from "./components/Testimonial/Testimonial";
import "./styles/tokens.css";

export function App() {
  return (
    <>
      <Testimonial
        author="Ronaldo"
        quote="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
        role="CEO"
        logo={""}
      />
    </>
  );
}

