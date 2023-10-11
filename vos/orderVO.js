class Order {
    constructor(ID, userID, quantity, purchaseDate, purchaseTime) {
        this.ID = ID;
        this.userID = userID;
        this.quantity = quantity;
        this.purchaseDate = purchaseDate;
        this.purchaseTime = purchaseTime;
    }
}

module.exports = Order;