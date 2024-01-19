class Project {
    constructor(files) {
        this.files = files;
    }
    mutateFile(path, content, options = {}) {
        this.files[path] = {
            ...options,
            code: content
        }
    }
    read() {
        return { files: this.files }; 
    }
    readFile(path) {
        return this.files[path].code;
    }
}

export default Project;