export class Simulator extends EventTarget {
    constructor(project) {
        super();
        this.project = project;
    }

    async load(iframe) {
        this.iframe = iframe;
        await this.launch();
    }
    async launch() {
        this.dispatchEvent(new CustomEvent('simulator:ready'))
    }

    async updateProject() {}
}