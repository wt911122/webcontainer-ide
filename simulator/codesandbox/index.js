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
    mutateContentInTemplate(content) {
        this.project.files[this.filePath] = { code: content };
    }

    mutateInternalDep(module) {
        this.project.files[`/node_modules/@internals/${module.name}/package.json`] = {
            hidden: true,
            code: JSON.stringify({
                name: module.name,
                main: "./index.js",
            }),
        };
        this.project.files[`/node_modules/@internals/${module.name}/index.js`] = {
            hidden: true,
            code: module.component,
        };
    }
    // mutateDependenciedInTemplate(dependencies) {
    //     const packageJSON = this.project.files['/package.json'];
    //     const packageObj = JSON.parse(packageJSON);
    //     Object.assign(packageObj.dependencies, dependencies);
    //     this.project.files[this.filePath] = { code: JSON.stringify(packageObj) };
    // }
    async updateProject(content) {
        this.mutateContentInTemplate(content);
        this.client.updateSandbox(this.project);
    }
    async updatePackageJSON(dependencies) {
        this.mutateDependenciedInTemplate(dependencies);
        this.client.updateSandbox(this.project);
    }
}

export default CodeSandBoxSimulator;