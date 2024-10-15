import { useGlobalContext } from "@/hooks/useGlobalContext";
import Container from "@/components/Container";

function Final() {
    const { changeSlide } = useGlobalContext();

    return (
        <Container>
            <>
                <h1>That's it!</h1>
                <p>Hello world!</p>
                <a onClick={(e) => {
                    e.preventDefault();
                    changeSlide("prev");
                }}>
                    Go Back
                </a>
                <a onClick={(e) => {
                    e.preventDefault();
                    changeSlide("reset");
                }}>
                    Reset
                </a>
            </>
        </Container>
    );
}

export default Final;