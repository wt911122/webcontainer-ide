const fs = require('fs');
const path = require('path');

function init(path) {
    const info = {};
    dirTree(path, info);
    return info.directory;
}

function dirTree(path, info) {
    const stats = fs.lstatSync(path);
    if(stats.isDirectory()) {
        info.directory = {} 
        fs.readdirSync(path).map((child) => {
            info.directory[child] = {};
            dirTree(path + '/' + child, info.directory[child])
        })
    } else {
        info.file = {
            contents: fs.readFileSync(path, "utf8")
        }
    }
}

function writeFile() {
    const outputPath = path.resolve(__dirname, '../template.js');
    const info = init(path.resolve(__dirname, '../template/react-template'))
    const proxyFile = fs.readFileSync(path.resolve(__dirname, '../template/template-proxy/proxy.js'), "utf8")
    info.src.directory['proxy.js'] = { file: { contents: proxyFile } };
    const content = `export const files = ${JSON.stringify(info, null, "\t")}`
    fs.writeFileSync(outputPath, content);
}
writeFile()

fs.watch(path.resolve(__dirname, '../template'), { recursive: true },
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