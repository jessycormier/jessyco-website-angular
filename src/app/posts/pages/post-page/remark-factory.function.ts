import rehypeSanitize from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';
import remarkFrontmatter from 'remark-frontmatter';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { extractFrontMatter } from './extract-front-matter.function';

export function unifiedFactory() {
    return unified()
        .use(remarkParse)
        .use(rehypeStringify)
        .use(remarkFrontmatter)
        .use(remarkRehype)
        .use(rehypeSanitize)
        .use(extractFrontMatter)
        .freeze();
}