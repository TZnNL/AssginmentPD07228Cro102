export default class Cart{
    constructor(id, idUser, idCoffee, quantity, size, img, nameCoffee,description, price) {
        this._id = id;
        this._idUser = idUser;
        this._idCoffee = idCoffee;
        this._quantity = quantity;
        this._size = size;
        this._img = img; // Adding img property
        this._nameCoffee = nameCoffee;
        this._description = description;
        this._price = price;
    }

    getPrice() {
        return this._price;
    }

    // Setter cho thuộc tính price
    setPrice(price) {
        this._price = price;
    }

    get description() {
        return this._description;
    }

    set description(newDescription) {
        this._description = newDescription;
    }
    get img() {
        return this._img;
    }

    set img(newImg) {
        this._img = newImg;
    }

    // Getter and setter for nameCoffee
    get nameCoffee() {
        return this._nameCoffee;
    }

    set nameCoffee(newNameCoffee) {
        this._nameCoffee = newNameCoffee;
    }

    // Getter cho id
    get id() {
        return this._id;
    }

    // Setter cho id
    set id(value) {
        this._id = value;
    }

    // Getter cho idUser
    get idUser() {
        return this._idUser;
    }

    // Setter cho idUser
    set idUser(value) {
        this._idUser = value;
    }

    // Getter cho idCoffee
    get idCoffee() {
        return this._idCoffee;
    }

    // Setter cho idCoffee
    set idCoffee(value) {
        this._idCoffee = value;
    }

    // Getter cho quantity
    get quantity() {
        return this._quantity;
    }

    // Setter cho quantity
    set quantity(value) {
        this._quantity = value;
    }

    // Getter cho size
    get size() {
        return this._size;
    }

    // Setter cho size
    set size(value) {
        this._size = value;
    }

}