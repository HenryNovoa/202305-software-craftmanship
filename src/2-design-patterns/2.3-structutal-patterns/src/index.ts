/**
 * The base Ticket interface defines checkins that can be altered by
 * decorators.
 */
interface Ticket {
    checkin(): TicketDTO;
}

type TicketDTO = {

 code: string,
 origin: string,
 destination: string,
 date: string,
 extras : Extra[]

}

/**
 * Concrete Tickets provide default implementations of the checkins. There
 * might be several variations of these classes.
 */
class ConcreteTicket implements Ticket {
  public checkin(): TicketDTO {
    return {
      code: '123',
      origin: 'Bogota',
      destination: 'Medellin',
      date: '2021-10-10',
      extras: [],
    };
  }
}

/**
 * The base Decorator class follows the same interface as the other Tickets.
 * The primary purpose of this class is to define the wrapping interface for all
 * concrete decorators. The default implementation of the wrapping code might
 * include a field for storing a wrapped Ticket and the means to initialize
 * it.
 */
class Extra implements Ticket {
  protected Ticket: Ticket;

  constructor(Ticket: Ticket) {
    this.Ticket = Ticket;
  }

  //* The Decorator delegates all work to the wrapped Ticket.

  public checkin(): TicketDTO {
    return this.Ticket.checkin();
  }
}

/**
 * Concrete Decorators call the wrapped object and alter its result in some way.
 */
class LuggageExtra extends Extra {
  constructor(Ticket: Ticket, private luggage: string) {
    super(Ticket);
  }
  /**
     * Decorators may call parent implementation of the checkin, instead of
     * calling the wrapped object directly. This approach simplifies extension
     * of decorator classes.
     */

  public checkin(): TicketDTO {
    const baseTicket = super.checkin();
    baseTicket.extras.push(this);
    return baseTicket;
  }
}

/**
 * Decorators can execute their behavior either before or after the call to a
 * wrapped object.
 */
class ConcreteDecoratorB extends Extra {
  public checkin(): TicketDTO {
    return super.checkin();
  }
}

/**
 * The client code works with all objects using the Ticket interface. This
 * way it can stay independent of the concrete classes of Tickets it works
 * with.
 */
function clientCode(Ticket: Ticket) {
  // ...

  console.log(`RESULT: ${Ticket.checkin()}`);

  // ...
}

/**
 * This way the client code can support both simple Tickets...
 */
const simple = new ConcreteTicket();
console.log('Client: I\'ve got a simple Ticket:');
clientCode(simple);
console.log('');

/**
 * ...as well as decorated ones.
 *
 * Note how decorators can wrap not only simple Tickets but the other
 * decorators as well.
 */
const decorator1 = new LuggageExtra(simple, '2');
const decorator2 = new ConcreteDecoratorB(decorator1);
console.log('Client: Now I\'ve got a decorated Ticket:');
clientCode(decorator2);
