import { useEffect } from "react";
import { useGlobalContext } from "./hooks/useGlobalContext";
import { useSlidesContext } from "./hooks/useSlidesContext";
import { ConfigProvider } from "antd";

import Loader from "./components/Loader";
import Final from "./pages/Final";
import Slides from "./pages/Slides";

import preferences from "./settings/preferences";
import slides from "./settings/slides";

const AntDTheme = {
  token: {
    colorBgElevated: preferences.colors.antdTheme?.token?.colorBgElevated || "var(--secondaryColor)",
    colorText: preferences.colors.antdTheme?.token?.colorText || "var(--textColor)",
    colorTextPlaceholder: preferences.colors.antdTheme?.token?.colorTextPlaceholder || "var(--textColor)",
    colorIcon: preferences.colors.antdTheme?.token?.colorIcon || "var(--textColor)",
    colorIconHover: preferences.colors.antdTheme?.token?.colorIconHover || "var(--textColor)",
  },
  components: {
    Input: {
      activeBg: preferences.colors.antdTheme?.components?.Input?.activeBg|| "var(--secondaryColor)",
      colorBgContainer: preferences.colors.antdTheme?.components?.Input?.colorBgContainer || "var(--primaryColor)",
      colorBorder: preferences.colors.antdTheme?.components?.Input?.colorBorder || "var(--primaryColor)"
    }
  }
};

function App() {
  const { showLoading } = useGlobalContext();
  const { isEnd, slideIndex } = useSlidesContext();
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