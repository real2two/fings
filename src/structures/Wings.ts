import { WingsEvents } from "./WingsEvents";

export class Wings {
  on(name: string, listener: any) {
    if (!this.eventExists(name)) throw new Error("Event with provided name doesn't exist");


  }
  call(name: string, evt: object) {
    if (!this.eventExists(name)) throw new Error("Event with provided name doesn't exist");

  }

  eventExists(name: string) {
    return (<any>Object).values(WingsEvents).includes(name);
  }
}
