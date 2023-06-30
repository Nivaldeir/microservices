export default interface Queue {
    connect(): Promise<void>
    on(queueName: string, callback: Function): Promise<void>
    publish(queueName: String, data: any): Promise<void>
}