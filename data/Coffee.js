export default class Coffee {
    constructor(id, name, price, img, star, description, type, favorite, country) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._img = img;
        this._star = star;
        this._description = description;
        this._type = type;
        this._favorite = favorite;
        this._country = country;
    }
    get country() {
        return this._country;
    }
    set country(value) {
        this._country = value;
    }
    get favorite() {
        return this._favorite;
    }

    // Setter cho thuộc tính favorite
    set favorite(value) {
        this._favorite = value;
    }

    // Getter và setter cho thuộc tính id
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }

    // Getter và setter cho thuộc tính name
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }

    // Getter và setter cho thuộc tính price
    get price() {
        return this._price;
    }
    set price(value) {
        this._price = value;
    }

    // Getter và setter cho thuộc tính img
    get img() {
        return this._img;
    }
    set img(value) {
        this._img = value;
    }

    // Getter và setter cho thuộc tính star
    get star() {
        return this._star;
    }
    set star(value) {
        this._star = value;
    }

    // Getter và setter cho thuộc tính description
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }

    // Getter và setter cho thuộc tính type
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
}
