import { useGlobalContext } from "./hooks/useGlobalContext";

import GlobalStyle from "./components/GlobalStyle";
import Final from "./pages/Final";
import Slides from "./pages/Slides";
import slides from "./settings/slides";

function App() {
  const { isEnd, slideIndex } = useGlobalContext();
  const currentSlide = slides[slideIndex as keyof object];

  return (
    <>
      <GlobalStyle />
      {
        isEnd 
        ? <Final /> 
        : currentSlide.custom 
          ? currentSlide.custom
          : <Slides />
      }
    </>
  );
}

export default App;