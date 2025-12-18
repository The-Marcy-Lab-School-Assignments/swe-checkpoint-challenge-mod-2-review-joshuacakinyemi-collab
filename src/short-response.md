# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Notification` and an `EmailNotification` have an inheritance relationship because "an email notification is a type of notification". Meanwhile a library and a book have a composition relationship because "a library has many books".

1. A `House` class and a `Room` class
2. A `Bicycle` class and a `Vehicle` class
3. A `School` class and a `Teacher` class
4. A `Penguin` class and a `Bird` class
5. A `Order` class and an `OrderItem` class
6. A `CheckingAccount` class and a `BankAccount` class

### Response 1

1. A `House` class and a `Room` class have a composition relationship because a house can hold multiple rooms.
2. A `Bicycle` class and a `Vehicle` class have an inheritance relationship because a Bicycle is a type of vehicle.
3. A `School` class and a `Teacher` class have a composition relationship because a school can have many teachers.
4. A `Penguin` class and a `Bird` class have an inheritance relationship because a penguin is a bird.
5. An `Order` class and an `OrderItem` class have a composition relationship because an order could have more than one Item.
6. A `CheckingAccount` class and a `BankAccount` class have an inheritance relationship because a checking account is still a bank account.


---

## Question 2

When designing a class, you must decide which properties should be **public** and which should be **private**.

a) What is the purpose of making a property private?

b) In the `Library` class from Problem 2, the `books` and `checkedOut` arrays are private while the `name` property is public. Explain why this design choice makes sense. What could go wrong if `books` and `checkedOut` were public?

### Response 2

a) The purpose of making a private property is so that it can’t be **modified** or shown directly, to prevent **unwanted** results. 


b) Both `books` and `checkedOut` are **private** because they contain data on which books are checked in and checked out of the `library`. If they weren’t there, you could remove a book **outside** of the object and possibly mess up the internal array. 

---

## Question 3

The following `BankAccount` class does **NOT** demonstrate good encapsulation. Review the code and answer the questions below.

```js
class BankAccount {
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.balance = initialBalance;
    this.transactions = [];
  }

  deposit(amount) {
    this.balance += amount;
    this.transactions.push({ type: 'deposit', amount });
  }

  withdraw(amount) {
    this.balance -= amount;
    this.transactions.push({ type: 'withdrawal', amount });
  }
}

// Example usage that demonstrates the problem:
const account = new BankAccount("Alice", 1000);
account.balance = 1000000;  // Uh oh! Anyone can modify the balance directly
account.transactions = [];   // Uh oh! Transaction history can be erased
```

a) Identify which properties should be made private and explain why.

b) Rewrite the `BankAccount` class with proper encapsulation. Include:
   - Private properties where appropriate
   - Getter methods to access private data
   - Any necessary modifications to existing methods

c) Explain why the `withdraw` method in the original code has a logic flaw, and fix it in your rewritten class.

### Response 3

Both `balance` and `transactions` need to be private because anyone can **affect** the amount of money you have and your transaction history. 

```js
class BankAccount {
  #balance;
  #transactions = [];
  constructor(ownerName, initialBalance) {
    this.ownerName = ownerName;
    this.#balance = initialBalance;
  }

get balance() {
  return this.#balance;
}

get transactions() {
  return this.#transactions;
}

  deposit(amount) {
    this.#balance += amount;
    this.#transactions.push({ type: 'deposit', amount });
  }

  withdraw(amount) {
    if (amount > this.#balance) {
      return "Low funds"
    }
    this.#balance -= amount;
    this.#transactions.push({ type: 'withdrawal', amount });
  }
}
```

c) Your response...
