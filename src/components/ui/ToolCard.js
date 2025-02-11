// src/components/ui/ToolCard.js
export default function ToolCard({
  name = "ChatGPT",
  description = "Advanced language model for conversation and text generation.",
  url = "#",
  image,
}) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="h-[300px] w-full">
        <img
          src={image || "https://placehold.co/800x300/png"}
          alt={`${name} icon`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="p-4 lg:p-6">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white dark:hover:text-green-200">
            {name}
          </h3>
        </a>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {description}
        </p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-950 dark:text-green-200 text-green-400 dark:hover:text-green-300 font-medium inline-flex items-center gap-1"
        >
          Czytaj więcej →
        </a>
      </div>
    </div>
  );
}
