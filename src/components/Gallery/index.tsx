import Accordion from "../Accordion";

import PreviewGroup from "./PreviewGroup";

export interface GalleryProps {
    title?: string,
    accordion: boolean,
    images: ImagesInterface[]
}

export interface ImagesInterface {
    url: string,
    alt?: string
}

import "./Gallery.css";

const Gallery = ({ title, accordion, images }: GalleryProps) => {
    return (
        <>
            {accordion ? <Accordion title={title ? title : ""} content={<PreviewGroup images={images} />} /> : (
                <section className="gallery">
                    {title && <h2 className="gallery-title">{title}</h2>}
                    <PreviewGroup images={images} />
                </section>
            )}
        </>
    );
};

export default Gallery;