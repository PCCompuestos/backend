class User {
    constructor(ID, name, password, isAdmin, email, address) {
        this.ID = ID;
        this.name = name;
        this.password = password;
        this.isAdmin = isAdmin;
        this.email = email;
        this.address = address;
    }
}

module.exports = User;