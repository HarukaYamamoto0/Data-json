class Database {
  #storage = {};

  set(key, value) {
    if (!this.#isString(key, value))
      throw new Error("The received value is not a string");
    else this.#storage[key] = value;
  }

  get(key) {
    if (!this.#isString(key)) throw new Error("This is not a valid key");
    else if (!this.has(key)) return null;
    else return this.#storage[key];
  }

  has(key) {
    if (!this.#isString(key)) throw new Error("This is not a valid key");
    return this.#storage.hasOwnProperty(key);
  }

  clear() {
    this.#storage = {};
  }

  toJSON() {
    return JSON.stringify(this.#storage);
  }

  /*------------------------------------------------------------------------*/
  #isString(...values) {
    return [...values].every((value) => typeof value === "string");
  }
}

module.exports = Database;
