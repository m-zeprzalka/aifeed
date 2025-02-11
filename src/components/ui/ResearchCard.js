export default function ResearchCard({
  source = "ArXiv",
  title = "Advances in Neural Networks",
  description = "New research shows improvements in deep learning efficiency...",
  url = "#",
  image,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-md transition-shadow duration-300 transition-all group relative overflow-hidden">
      <div className="w-full h-[300px]">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <img
            src={image || "https://placehold.co/800x300/png"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </a>
      </div>
      <div className="p-4 lg:p-6">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <h3 className="font-bold mb-2 text-gray-900 dark:text-white dark:hover:text-green-200 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
            {description}
          </p>
          <span className="text-green-600 dark:text-green-200 text-sm">
            {source}
          </span>
        </a>
      </div>
    </div>
  );
}
