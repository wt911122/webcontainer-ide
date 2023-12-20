import { Simulator } from '../../ide/simulator-interface';
import { WebContainer } from '@webcontainer/api';

class WebContainerSimulator extends Simulator {
    webcontainer = null;
    options = {
        showOpenInCodeSandbox: false,
        showErrorScreen: false,
        showLoadingScreen: false,
    };

    async launch() {
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
            // iframe.addEventListener('load', () => {
            //     this.dispatchEvent(new CustomEvent('simulator:ready'))
            // }, {
            //     once: true,
            // }) 
            iframe.src = url;
        });
    }
    mutateContentInTemplateBeforeLoad(content) {
        this.project.src.directory['App.jsx'] = {
            file: {
                contents: content
            }
        }
    }
    async updateProject(content) {
        await this.webcontainer.fs.writeFile(this.filePath, content);
    }
}

export default WebContainerSimulator;