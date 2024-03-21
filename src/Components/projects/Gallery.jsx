import React from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import "../../Styles/Projects.css";

function PhotoGallery() {
  const photos = [
    {
      src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    },
    {
      src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    },
    {
      src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    },
    {
      src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    },
    {
      src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    },
    {
      src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    },
    {
      src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    },
    {
      src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    },
    {
      src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    },
    {
      src: "https://source.unsplash.com/XiDA78wAZVw/600x799",
    },
    {
      src: "https://source.unsplash.com/x8xJpClTvR0/800x599",
    },
    {
      src: "https://source.unsplash.com/u9cG4cuJ6bU/4927x1000",
    },
    {
      src: "https://source.unsplash.com/qGQNmBE7mYw/800x599",
    },
    {
      src: "https://source.unsplash.com/NuO6iTBkHxE/800x599",
    },
    {
      src: "https://source.unsplash.com/pF1ug8ysTtY/600x400",
    },
    {
      src: "https://source.unsplash.com/A-fubu9QJxE/800x533",
    },
  ];

  return (
    <div id="gallery" className=" container py-5">
      <h1 className="galleryTitle">Gallery</h1>
      <div className="gallery">
        <Gallery>
          {photos.map((item, i) => (
            <Item
              original={item.src}
              thumbnail={item.src}
              width="1024"
              height="768"
            >
              {({ ref, open }) => (
                <img ref={ref} onClick={open} src={item.src} alt="/" />
              )}
            </Item>
          ))}
        </Gallery>
      </div>
    </div>
  );
}

export default PhotoGallery;
