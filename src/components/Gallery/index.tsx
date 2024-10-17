import { useState } from "react";

import { DownloadOutlined, LeftOutlined, RightOutlined, RotateLeftOutlined, RotateRightOutlined, SwapOutlined, UndoOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { Image, Space } from "antd";
import { FaRegEye } from "react-icons/fa";

import preferences from "@/settings/preferences";

import "./Gallery.css";

export interface GalleryProps {
    title?: string,
    images: ImagesInterface[]
}

interface ImagesInterface {
    url: string,
    alt?: string
}

const Gallery = ({ title, images }: GalleryProps) => {
    const [current, setCurrent] = useState(0);
    
    const onDownload = async () => {
        const url = images[current].url;
        console.log(url);
        const suffix = url.slice(url.lastIndexOf('.'));
        const image = await fetch(`/images/${url}`);
        const imageBlog = await image.blob();
        const imageURL = URL.createObjectURL(imageBlog);
        const filename = Date.now() + suffix;
      
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="gallery">
            {title && <h2 className="gallery-title">{title}</h2>}
            <Image.PreviewGroup preview={{
                toolbarRender: (
                    _,
                    {
                        transform: { scale },
                        actions: {
                            onActive,
                            onFlipY,
                            onFlipX,
                            onRotateLeft,
                            onRotateRight,
                            onZoomOut,
                            onZoomIn,
                            onReset,
                        },
                    },
                ) => (
                    <Space size={12} className="toolbar-wrapper">
                        <LeftOutlined onClick={() => onActive?.(-1)} />
                        <RightOutlined onClick={() => onActive?.(1)} />
                        <DownloadOutlined onClick={onDownload} />
                        <SwapOutlined rotate={90} onClick={onFlipY} />
                        <SwapOutlined onClick={onFlipX} />
                        <RotateLeftOutlined onClick={onRotateLeft} />
                        <RotateRightOutlined onClick={onRotateRight} />
                        <ZoomOutOutlined disabled={scale === 1} onClick={onZoomOut} />
                        <ZoomInOutlined disabled={scale === 50} onClick={onZoomIn} />
                        <UndoOutlined onClick={onReset} />
                    </Space>
                ),
                onChange: (index) => {
                    setCurrent(index);
                },
            }}>
                <div className="gallery-container">
                    {images.map((img, i) => {
                        return <Image
                            key={i}
                            src={`/images/${img.url}`}
                            alt={img.alt ? img.alt : `${i}`}
                            placeholder={
                                <h3 className="gallery-image-placeholder">Loading...</h3>
                            }
                            preview={{
                                mask: <div className="gallery-image-mask">
                                    <FaRegEye />
                                    {preferences.imageMaskPlaceholder}
                                </div>
                            }}
                            onClick={() => setCurrent(i)}
                        />;
                    })}
                </div>
            </Image.PreviewGroup>
        </section>
    );
};

export default Gallery;