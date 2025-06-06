export function CardGame({
  name,
  tags,
  srcImage,
  priceOriginal,
  pricePromocional,
  className = "",
}: CardProps) {
  return (
    <div
      className={`relative rounded-lg overflow-hidden border border-gray-300 shadow-md group ${className}`}
    >
      {/* Container da imagem com proporção fixa */}
      <div className="aspect-[16/9] w-full overflow-hidden">
        <img
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
          src={srcImage}
          alt={name}
        />
      </div>

      {/* Tags */}
      <div className="absolute z-10 flex flex-wrap gap-2 top-2 left-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full shadow"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Rodapé promocional */}
      <div className="absolute bottom-0 left-0 z-10 flex items-center justify-between w-full px-3 py-2 text-sm text-white bg-black/70">
        <span className="text-gray-300 line-through">
          R$ {priceOriginal.toFixed(2)}
        </span>
        <span className="font-semibold text-green-400">
          R$ {pricePromocional.toFixed(2)}
        </span>
      </div>
    </div>
  );
}
