import EventRepository from "../../application/repository/EventRepository";
import pgq from "pg-promise"
import Event from "../../domain/entities/Event";

export default class EventRepositoryDatabase implements EventRepository {

    async get(eventId: string): Promise<Event> {
        const connection = pgq()("postgres://postgres:123456@localhost:5432/curso");
        const [eventData] = await connection.query("select * from fullcycle.event where event_id = $1", [eventId])
        await connection.$pool.end()
        return new Event(eventData.event_id, eventData.description, parseFloat(eventData.price), eventData.capacity)
    }

}