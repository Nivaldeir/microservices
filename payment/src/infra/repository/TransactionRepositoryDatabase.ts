import TransactionRepository from "../../application/repository/TransactionRepository";
import pgq from "pg-promise"
import Transaction from "../../domain/entities/Transaction";

export default class TransactionRepositoryDatabase implements TransactionRepository {
    async save(transation: Transaction): Promise<void> {
        const connection = pgq()("postgres://postgres:123456@localhost:5432/curso");
        await connection.query("insert into fullcycle.transaction (transaction_id, ticket_id, event_id, tid, price, status) values($1, $2, $3, $4, $5, $6)", [transation.transactionId, transation.ticketId, transation.eventId, transation.tid, transation.price, , transation.status])
        await connection.$pool.end()
    }

}