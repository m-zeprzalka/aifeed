export default function ArticleCard({ article }) {
  return (
    <article className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 group">
      <div className="relative aspect-video">
        <a href={article.url} target="_blank">
          <img
            src={article.urlToImage || "https://placehold.co/600x400/png"}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </a>
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-green-200 text-slate-950 px-3 py-1 rounded-full text-sm">
            {article.category}
          </span>
        </div>
      </div>
      <div className="p-4 lg:p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white dark:group-hover:text-green-200  transition-colors">
          <a href={article.url} target="_blank">
            {article.title}
          </a>
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
          {article.description}
        </p>
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-1">
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {article.sourceName}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {new Date(article.publishedAt).toLocaleDateString()}
            </span>
          </div>
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-950 dark:text-green-200 hover:text-green-400 dark:hover:text-green-300 font-medium group-hover:translate-x-1 transition-transform"
          >
            Czytaj więcej →
          </a>
        </div>
      </div>
    </article>
  );
}
