export default class Registry {
    dependencies: any = {}
    constructor() {
        this.dependencies = []
    }
    provide(name: string, value: any) {
        this.dependencies[name] = value
    }
    inject(name: string) {
        return this.dependencies[name]
    }
}