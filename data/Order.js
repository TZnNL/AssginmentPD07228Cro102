export default class Order {
    constructor(id, date, img, price, iduser, size, nameProduct) {
        this._id = id;
        this._date = date;
        this._img = img;
        this._price = price;
        this._iduser = iduser;
        this._size = size;
        this._nameProduct = nameProduct;
    }

    // Getter cho id
    get id() {
        return this._id;
    }

    // Setter cho id
    set id(newId) {
        this._id = newId;
    }

    // Getter cho date
    get date() {
        return this._date;
    }

    // Setter cho date
    set date(newDate) {
        this._date = newDate;
    }

    // Tương tự cho các thuộc tính khác: img, price, iduser, size, nameProduct
    // Định nghĩa getter và setter tương tự cho mỗi thuộc tính cần thiết
}
