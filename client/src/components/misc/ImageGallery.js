import { useCallback, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from "react-photo-gallery";
import { useParams } from "react-router-dom";
import Logo from "../../logo.svg";

// const photos = [
//   {
//     src: "https://realist-bucket-123.s3.amazonaws.com/YxfcWchIbMHuB7AUIEAAC.jpeg",
//     width: 4,
//     height: 3,
//   },
//   {
//     src: "https://realist-bucket-123.s3.amazonaws.com/9nO1wF5L9ZPwkOHpGXO9n.jpeg",
//     width: 1,
//     height: 1,
//   },
// ];

export default function ImageGallery({ photos }) {
  // state
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  // hooks
  const params = useParams();

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrent(index);
    setIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrent(0);
    setIsOpen(false);
  };
  return (
    <>
      <Gallery photos={photos} onClick={openLightbox} />;
      <ModalGateway>
        {isOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={current}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcset,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </>
  );
}
