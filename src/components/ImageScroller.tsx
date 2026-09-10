interface ImageScrollerProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function ImageScroller({ images }: ImageScrollerProps) {
  return (
    <div className="image-scroller-wrapper">
      <div className="image-scroller">
        {images.map((image, index) => (
          <div key={index} className="image-scroller__item">
            <img
              src={`${import.meta.env.BASE_URL}${image.src}`}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="image-scroller__image"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
