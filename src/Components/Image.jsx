export default function Image({ image, width, height }) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width, height }}
    >
      {/* Image */}
      <img
        src={image}
        alt=""
        className="absolute w-full h-full object-contain"
      />
    </div>
  );
}
