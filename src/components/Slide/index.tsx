import { useSlidesContext } from "@/hooks/useSlidesContext";
import { useEffect, useRef } from "react";
import { SlideInterface } from "@/interfaces/SlideInterface";

import styles from "./Slide.module.css";

const Slide = (slide: SlideInterface) => {
    const { slideIndex } = useSlidesContext();
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        if (!slide.soundEffect) return;

        const newAudio = new Audio(`/sounds/${slide.soundEffect}`);
        audioRef.current = newAudio;

        newAudio.play();

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [slide.soundEffect]);

    return (
        <div className={styles.slide} key={slideIndex}>
            <div className={styles.imageContainer}>
                {slide.topImg && <img src={`/images/${slide.topImg}`} />}
            </div>
            <div className={styles.container}>
                <h1>{slide.mainText}</h1>
                {slide.subText && <p>{slide.subText}</p>}
            </div>
            <div className={styles.imageContainer}>
                {slide.bottomImg && <img src={`/images/${slide.bottomImg}`} />}
            </div>
        </div>
    );
};

export default Slide;