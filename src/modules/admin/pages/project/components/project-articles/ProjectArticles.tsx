import ScrollArea from "@ui/scroll-area/ScrollArea.tsx";
import NotFound from "@ui/not-found/NotFound.tsx";
import { listCardStatusClassName } from "@ui/list-card/constants/list-card.constants.ts";
import { useProjectArticlesQuery } from "../../api/queries/useProjectArticlesQuery.ts";
import type { ProjectArticlesProps } from "./types/project-articles.types.ts";

const ProjectArticles = ({ projectId }: ProjectArticlesProps) => {
  const { data: articles, isLoading } = useProjectArticlesQuery(projectId);

  const getStatusClass = (status: string) =>
    listCardStatusClassName[status] || listCardStatusClassName.active;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-700">Articles</h2>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center text-gray-500 py-4">
          Loading articles...
        </div>
      ) : articles && articles.length > 0 ? (
        <ScrollArea className="h-[600px]">
          <div className="flex flex-col gap-3 pr-2">
            {articles.map((article) => (
              <div
                key={article.id}
                className="flex gap-4 rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[150px] w-[200px] shrink-0 rounded-md object-cover bg-gray-100"
                />
                <div className="flex min-w-0 flex-col justify-center gap-1.5">
                  <span className="text-xs text-gray-400">#{article.id}</span>
                  <h3 className="text-lg font-semibold text-gray-800 truncate">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-500">
                    Status:{" "}
                    <span className={getStatusClass(article.status)}>
                      {article.status}
                    </span>
                  </span>
                  <span className="text-xs text-gray-500">
                    Created: {new Date(article.created).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      ) : (
        <NotFound message="No articles found for this project." />
      )}
    </div>
  );
};

export default ProjectArticles;
