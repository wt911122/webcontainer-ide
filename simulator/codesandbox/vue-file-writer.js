const fs = require('fs');
const path = require('path');

// const templatePath = path.resolve(__dirname, './react-template');

const templatePath = path.resolve(__dirname, '../../template');
const rspackTemplatePath = path.resolve(templatePath, './rspack-react-template');
const outputPath = path.resolve(__dirname, '../../react-template.js');
function init(path) {
    const info = {
        files: {},
        environment: "vanilla"
    };
    dirTree(path, info.files);
    return info;
}

function dirTree(_path, info) {
    const stats = fs.lstatSync(_path);
    if(stats.isDirectory()) {
        fs.readdirSync(_path).map((child) => {
            dirTree(_path + '/' + child, info)
        })
    } else {
        const p = '/'+path.relative(rspackTemplatePath, _path);
        info[p] = {
            code: fs.readFileSync(_path, "utf8")
        }
    }
}

function writeFile() {
    const info = init(rspackTemplatePath)
    const proxyFile = fs.readFileSync(path.resolve(templatePath, './template-proxy/proxy.js'), "utf8")
    info.files['/src/proxy.js'] = { code: proxyFile };
    const ideCSSFile = fs.readFileSync(path.resolve(templatePath, './template-proxy/ide.css'), "utf8")
    info.files['/src/ide.css'] = { code: ideCSSFile };
    const content = `export const files = ${JSON.stringify(info, null, "\t")}`
    fs.writeFileSync(outputPath, content);
}
writeFile()

fs.watch(templatePath, { recursive: true },
    (eventType, filename) => {
        console.log('filechanged!')
        writeFile();
    });

// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// }); 