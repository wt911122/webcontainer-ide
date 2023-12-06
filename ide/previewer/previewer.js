import { WebContainer } from '@webcontainer/api';

class Previewer extends EventTarget {
    webcontainer = null;

    setIframe(iframe){
        this.iframe = iframe;
    }

    setProject(project) {
        this.project = project;
    }

    async load() {
        const webcontainer = await WebContainer.boot({
            coep: 'credentialless',
        });
        this.webcontainer = webcontainer;
        await webcontainer.mount(this.project);
        const packageJSON = await webcontainer.fs.readFile('package.json', 'utf-8');
        console.log(packageJSON);
        const exitCode = await this.installDependencies();
        if (exitCode !== 0) {
            throw new Error('Installation failed');
        };
        console.log('start Dev Server')

        this.startDevServer();
    }

    async installDependencies() {
        // Install dependencies
        const installProcess = await this.webcontainer.spawn('npm', ['install']);
        installProcess.output.pipeTo(new WritableStream({
            write(data) {
              console.log(data);
            }
        }));
        // Wait for install command to exit
        return installProcess.exit;
    }

    async startDevServer() {
        const webcontainer = this.webcontainer;
        const startDevProcess = await webcontainer.spawn('npm', ['run', 'dev']);
        startDevProcess.output.pipeTo(new WritableStream({
            write(data) {
            console.log(data);
            }
        }));
        const iframe = this.iframe;
        // Wait for `server-ready` event
        webcontainer.on('server-ready', (port, url) => {
            console.log(url)
            iframe.addEventListener('load', () => {

            }, {
                once: true,
            }) 
            iframe.src = url;
        });
    }

    async writeFile(path, content) {
        await this.webcontainer.fs.writeFile(path, content);
    }
}

export default Previewer;