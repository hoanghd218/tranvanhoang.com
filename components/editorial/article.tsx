import { editorialContent, type EditorialArticle } from "@/lib/editorial-content"
import { Artwork, Tag, ThemeLink } from "./primitives"

export function Article({ article, compact = false }: { article: EditorialArticle; compact?: boolean }) {
  return <article className={`editorial-article ${compact ? "editorial-article--compact" : ""}`}>
    <Artwork variant={article.image} />
    <div className="article-copy"><Tag>{article.category}</Tag><h3>{article.title}</h3><p>{article.excerpt}</p><ThemeLink>{editorialContent.sections.articleLink}</ThemeLink></div>
  </article>
}
export function ArticleGrid({ articles }: { articles: EditorialArticle[] }) {
  return <div className="article-grid">{articles.map(article => <Article key={article.id} article={article} />)}</div>
}
