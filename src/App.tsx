import { useEffect } from "react";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useSlidesContext } from "./hooks/useSlidesContext";
import { ConfigProvider } from "antd";

import Loader from "./components/Loader";
import Final from "./pages/Final";
import Slides from "./pages/Slides";

import preferences from "./settings/preferences";
import slides from "./settings/slides";

const getAntDTheme = () => {
  const token = preferences.colors.antdTheme?.token;
  const components = preferences.colors.antdTheme?.components;

  return {
    token: {
      colorBgElevated: token?.colorBgElevated || "var(--secondaryColor)",
      colorText: token?.colorText || "var(--textColor)",
      colorTextPlaceholder: token?.colorTextPlaceholder || "var(--textColor)",
      colorIcon: token?.colorIcon || "var(--textColor)",
      colorIconHover: token?.colorIconHover || "var(--textColor)",
    },
    components: {
      Input: {
        activeBg: components?.Input?.activeBg|| "var(--secondaryColor)",
        colorBgContainer: components?.Input?.colorBgContainer || "var(--primaryColor)",
        colorBorder: components?.Input?.colorBorder || "var(--primaryColor)"
      }
    }
  };
};

function App() {
  const { showLoading } = useGlobalContext();
  const { isEnd, slideIndex } = useSlidesContext();
  const AntDTheme = getAntDTheme();
  const currentSlide = slides[slideIndex as keyof object];

  useEffect(() => showLoading("reset"), []);

  useEffect(() => {
    showLoading("show");

    if (document.readyState === "complete") return showLoading("hide");

    const handleWindowLoad = () => showLoading("hide");

    window.addEventListener("load", handleWindowLoad);

    return () => window.removeEventListener("load", handleWindowLoad);
  }, []);

  return (
    <>
      <Loader />
      <ConfigProvider theme={AntDTheme}>
        {
          isEnd 
          ? <Final /> 
          : currentSlide.custom 
            ? currentSlide.custom
            : <Slides />
        }
      </ConfigProvider>
    </>
  );
}

export default App;