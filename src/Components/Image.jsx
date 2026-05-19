export default function Image({ image, className = "" }) {
  return (
    <div
      className={`relative flex items-center justify-center ${className}`}
    >
      <img
        src={image}
        alt=""
        className="w-full h-full object-contain"
      />
    </div>
  );
}
