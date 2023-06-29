import { matter } from 'vfile-matter';
import { VFile } from 'vfile-matter/lib';

/**
 * Plugin to parse YAML frontmatter and expose it at `file.data.matter`.
 */
export function extractFrontMatter() {
    return function (_: any, file: VFile) {
        matter(file)
    }
}