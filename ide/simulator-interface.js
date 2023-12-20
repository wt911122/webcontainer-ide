export class Simulator extends EventTarget {
    constructor(project, filePath) {
        super();
        this.project = project;
        this.filePath = filePath;
    }

    async load(iframe) {
        this.iframe = iframe;
        await this.launch();
    }
    async launch() {
        this.dispatchEvent(new CustomEvent('simulator:ready'))
    }

    mutateContentInTemplateBeforeLoad(content) {}

    async updateProject() {}
}