export default interface PaymentGateway {
    createTransaction(transaction: Input): Promise<Output>
}

export type Input = {
    email: string
    credtCardToken: string
    price: number
}

export type Output = {
    status: string
    tid: string
}