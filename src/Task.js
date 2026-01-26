export default class Task {
    constructor(text, date, id = crypto.randomUUID()) {
        this.text = text;
        this.date = date;
        this.id = id;
    }

    getID() {return this.id};
}