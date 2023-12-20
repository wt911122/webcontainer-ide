const fs = require('fs');
const path = require('path');

// const templatePath = path.resolve(__dirname, './react-template');
const templatePath = path.resolve(__dirname, '../../template');
function fileWriter(inputPath, _outputPath) {
    const rspackTemplatePath = path.resolve(templatePath, inputPath);
    const outputPath = path.resolve(__dirname, _outputPath);
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
    return function() {
        const info = init(rspackTemplatePath)
        const proxyFile = fs.readFileSync(path.resolve(templatePath, './template-proxy/proxy.js'), "utf8")
        info.files['/src/proxy.js'] = { code: proxyFile };
        const ideCSSFile = fs.readFileSync(path.resolve(templatePath, './template-proxy/ide.css'), "utf8")
        info.files['/src/ide.css'] = { code: ideCSSFile };
        const content = `export const files = ${JSON.stringify(info, null, "\t")}`
        fs.writeFileSync(outputPath, content);
    }
}
const reactFileWriter = fileWriter('./rspack-react-template', '../../react-template.js');
const vueFileWriter = fileWriter('./rspack-vue-template', '../../vue-template.js');
reactFileWriter();
vueFileWriter();
fs.watch(templatePath, { recursive: true },
    (eventType, filename) => {
        console.log('filechanged!')
        reactFileWriter();
        vueFileWriter();
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