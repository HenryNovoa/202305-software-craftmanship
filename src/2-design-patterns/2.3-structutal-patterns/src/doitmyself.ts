
type TicketDTO<T> = {
    code: string,
    origin: string,
    destination: string,
    date: string,
    extras: ExtraType<T>[]
}

type ExtraType<T> = {
    name: string;
    value: T;
}

interface Luggage {
    name: string;
    value: string;
}

interface Insurance {
    name: string;
    value: string;
}

interface Ticket<T> {
    ticket: TicketDTO<T>;
    checkin(): TicketDTO<T>;
}

class ConcreteTicket<T> implements Ticket<T> {
    ticket: TicketDTO<T>
  
    constructor(private code: string, private origin: string, private destination: string, private date: string, public extras: ExtraType<T>[] = []) {
        this.ticket = {code: this.code, origin: this.origin, destination: this.destination, date: this.date, extras: this.extras}
    }

    public checkin(): TicketDTO<T> {
        return this.ticket
    }
}

class Extra<T> implements Ticket<T> {
    Ticket: Ticket<T>


    constructor(public ticket: Ticket<T>){
        this.ticket = ticket
    }

    public checkin(): TicketDTO<T> {
        return this.ticket.checkin();
    }

}


class LuggageExtra<Luggage> extends Extra<Luggage> {
    constructor(protected ticket: Ticket<Luggage>, private luggageNumber: ExtraType<Luggage>){
        super(ticket);
    }

    public checkin(): TicketDTO<Luggage> {
        this.ticket.extras.push(this.luggageNumber)
        return this.ticket.checkin()
    }

}