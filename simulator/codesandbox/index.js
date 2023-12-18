import { Simulator } from '../../ide/simulator-interface';
import { loadSandpackClient } from "@codesandbox/sandpack-client";

class CodeSandBoxSimulator extends Simulator {
    options = {
        showOpenInCodeSandbox: false,
        showErrorScreen: false,
        showLoadingScreen: true,
    };

    async launch() {
        const client = await loadSandpackClient(
            this.iframe, 
            this.project, 
            this.options
        );
        this.client = client;
        console.log(client)
        // let launched = false;
        // client.listen((message) => {
        //     if(message.type === 'done' && !launched) {
        //         launched = true;
        //         this.dispatchEvent(new CustomEvent('simulator:ready'))
        //     }
        // })
    }

    async updateProject(path, content) {
        this.project.files['/' + path] = { code: content };
        this.client.updateSandbox(this.project);
    }
}

export default CodeSandBoxSimulator;