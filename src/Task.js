export default class Task {
    constructor(text, date, id = crypto.randomUUID(), indent = 0, indentDirection = "right") {
        this.text = text;
        this.date = this.getDate();
        this.indent = indent;
        this.indentDirection = indentDirection;
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

    getIndent() {return this.indent};
    getIndentDirection() {return this.indentDirection};
    getID() {return this.id};

    setIndent(number) {this.indent = number};
    setIndentDirection(direction) {this.indentDirection = direction};
}