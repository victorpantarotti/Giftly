//import { useState } from "react";

import { DownloadOutlined, LeftOutlined, RightOutlined, RotateLeftOutlined, RotateRightOutlined, SwapOutlined, UndoOutlined, ZoomInOutlined, ZoomOutOutlined } from '@ant-design/icons';
import { Image, Space } from "antd";

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
    //const [current, setCurrent] = useState(0);
    
    const onDownload = () => {
        alert('make that!');
    };

    return (
        <section>
            {title && <h2>{title}</h2>}
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
                //onChange: (index) => {
                    //setCurrent(index);
                //},
            }}>
                <div className="gallery-container">
                    {images.map((img, i) => {
                        return <Image
                            src={`/images/${img.url}`}
                            alt={img.alt ? img.alt : `${i}`}
                            key={i}
                        />;
                    })}
                </div>
            </Image.PreviewGroup>
        </section>
    );
};

export default Gallery;