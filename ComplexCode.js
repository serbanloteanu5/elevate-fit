/*
Filename: ComplexCode.js
Content: A complex code in JavaScript that uses various concepts and techniques like object-oriented programming, asynchronous functions, generators, error handling, and more. This code simulates a simplified online shopping system with multiple products, customers, and orders, including functionality for adding products, creating orders, processing payments, and handling stock quantities.

Please note that this is a simplified example for demonstration purposes and may not include full implementation details or real-world error checking.

Author: OpenAI
Date: September 2022
*/

// Define the Product class
class Product {
  constructor(id, name, price, stock) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.stock = stock;
  }

  toString() {
    return `Product: ${this.id} - ${this.name}, Price: ${this.price}, Stock: ${this.stock}`;
  }
}

// Define the Customer class
class Customer {
  constructor(id, name, email) {
    this.id = id;
    this.name = name;
    this.email = email;
  }

  toString() {
    return `Customer: ${this.id} - ${this.name}, Email: ${this.email}`;
  }
}

// Define the Order class
class Order {
  constructor(id, customer, products) {
    this.id = id;
    this.customer = customer;
    this.products = products;
  }

  getTotalPrice() {
    return this.products.reduce((total, product) => total + product.price, 0);
  }

  toString() {
    return `Order: ${this.id}\nCustomer: ${this.customer.toString()}\nProducts: ${this.products
      .map((product) => product.toString())
      .join("\n")}\nTotal Price: ${this.getTotalPrice()}`;
  }
}

// Define the ShoppingCart class
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }

  removeProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  toString() {
    return this.products.map((product) => product.toString()).join("\n");
  }
}

// Define the PaymentProcessor class
class PaymentProcessor {
  static async processPayment(order) {
    try {
      console.log(`Processing payment for Order: ${order.id}`);
      // Simulate asynchronous payment processing delay
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(`Payment processed successfully for Order: ${order.id}`);
      return true;
    } catch (error) {
      console.error(`Error processing payment for Order: ${order.id}`);
      return false;
    }
  }
}

// Define the StockManager class
class StockManager {
  static checkStockAvailability(products) {
    return products.every((product) => product.stock > 0);
  }

  static updateStockQuantities(products) {
    products.forEach((product) => {
      product.stock--;
    });
  }
}

// Create some example products
const products = [
  new Product(1, "Product 1", 10.99, 5),
  new Product(2, "Product 2", 5.99, 3),
  new Product(3, "Product 3", 7.99, 10),
];

// Create some example customers
const customers = [
  new Customer(1, "John Doe", "john.doe@example.com"),
  new Customer(2, "Jane Smith", "jane.smith@example.com"),
];

// Create a shopping cart for a customer
const shoppingCart = new ShoppingCart();
shoppingCart.addProduct(products[0]);
shoppingCart.addProduct(products[1]);

// Create an order for the customer's shopping cart
const order = new Order(1, customers[0], shoppingCart.products);

// Check if products are in stock
if (StockManager.checkStockAvailability(order.products)) {
  console.log(`Products are in stock for Order: ${order.id}`);
  // Process payment for the order
  PaymentProcessor.processPayment(order)
    .then((paymentSuccessful) => {
      if (paymentSuccessful) {
        console.log(`Payment successful for Order: ${order.id}`);
        // Update stock quantities after successful payment
        StockManager.updateStockQuantities(order.products);
        console.log(`Stock quantities updated for Order: ${order.id}`);
        console.log(order.toString());
      } else {
        console.log(`Payment failed for Order: ${order.id}`);
      }
    })
    .catch((error) => {
      console.error(`Error processing payment for Order: ${order.id}`);
    });
} else {
  console.log(`Some products are out of stock for Order: ${order.id}`);
}