export default class TicketReserved {
    constructor(readonly ticketId: string, readonly eventId: string, readonly creditcardToken: string, readonly price: number) { }
}