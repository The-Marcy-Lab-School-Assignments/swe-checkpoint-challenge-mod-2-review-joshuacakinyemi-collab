// Problem 1: Inheritance and Polymorphism - Notification System
// Implement your Notification, EmailNotification, and PushNotification classes below

class Notification {
  constructor(recipient, message) {
    this.recipient = recipient;
    this.message = message;
    this.timestamp = new Date();
  }
  send() {
    return `Sending notification to ${this.recipient}: ${this.message}`;
  }

  getFormattedTimestamp() {
    const day = this.timestamp.getDate()
    const month = this.timestamp.getMonth()
    const year = this.timestamp.getFullYear()
    return `${month}/${day}/${year}`;
  }
}

class EmailNotification extends Notification {
  constructor(recipient, message, subject) {
    super(recipient, message)

    this.subject = subject;
  }

  send() {
    super.send();
    return `Sending email to ${this.recipient} with subject '${this.subject}': ${this.message}`;
  }
}

class PushNotification extends Notification {
  constructor(recipient, message, appName, badge) {
    super(recipient, message)

    this.appName = appName;
    this.badge = badge;
  }

  send() {
    super.send();
    return `Sending push from ${this.appName} to ${this.recipient}: ${this.message} (Badge: ${this.badge})`
  }
}


const test = () => {

}

module.exports = { Notification, EmailNotification, PushNotification };
