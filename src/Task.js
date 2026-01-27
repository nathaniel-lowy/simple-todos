export default class Task {
    constructor(text, date, id = crypto.randomUUID()) {
        this.text = text;
        this.date = this.getDate();
        this.id = id;
    }

    getDate() {
        const options = {
            weekday: "short",
            month: "short",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric"
        }
        return new Intl.DateTimeFormat("en-us", options).format(new Date());
    }

    swap() {
        console.log("Swapping")
        const temp = this.text;
        this.text = this.date;
        this.date = temp;
    }

    getID() {return this.id};
}