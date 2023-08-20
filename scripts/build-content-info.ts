import * as fs from 'fs';
import * as matter from 'gray-matter';
import { Post } from 'src/app/posts/pages/post-page/Post';

const directoryPath = './src/content';
const outputPath = './src/generated';

console.log("-".repeat(80));
console.log("-".repeat(80));
console.log("\n⚙️ Generating 'src/generated/content-list.json\n\n'");

fs.readdir(directoryPath, (err, files) => {

    if (err) {
        return console.log('Unable to scan directory: ' + err);
    }

    const postData: Post[] = [];

    files.forEach((file) => {
        const filePath = directoryPath + '/' + file;
        const markdownFile = fs.readFileSync(filePath);
        const frontmatter = matter(markdownFile)?.data;

        if (frontmatter['published'] === false) {
            return;
        }

        postData.push({
            ...frontmatter,
            fileName: file,
        });

    });

    
    if (!fs.existsSync(outputPath)) {
        fs.mkdirSync(outputPath)
    }

    fs.writeFileSync(
        `${outputPath}/content-list.json`,
        JSON.stringify(postData)
    );

});

//TODO: build out array cat lists so we can query quickly..

