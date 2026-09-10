interface StudentShowcaseProps {
  images: {
    src: string
    alt: string
  }[]
}

export default function StudentShowcase({ images }: StudentShowcaseProps) {
  return (
    <div className="student-showcase">
      {images.map((image, index) => (
        <div key={index} className="student-showcase__item">
          <img
            src={`${import.meta.env.BASE_URL}${image.src}`}
            alt={image.alt}
            width={300}
            height={300}
            loading="lazy"
            decoding="async"
            className="student-showcase__image"
          />
        </div>
      ))}
    </div>
  )
}
