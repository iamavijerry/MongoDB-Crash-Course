use("ecommerce")

db.dropDatabase()

db.products.insertMany([
  {
    name: "Wireless Mouse",
    price: 799,
    category: "Electronics",
    stock: 120,
    ratings: 4.5,
    tags: ["computer", "accessory", "wireless"],
    createdAt: new Date()
  },
  {
    name: "Mechanical Keyboard",
    price: 2499,
    category: "Electronics",
    stock: 80,
    ratings: 4.8,
    tags: ["keyboard", "mechanical"],
    createdAt: new Date()
  },
  {
    name: "Gaming Laptop",
    price: 85999,
    category: "Computers",
    stock: 30,
    ratings: 4.6,
    tags: ["gaming", "laptop"],
    createdAt: new Date()
  },
  {
    name: "Bluetooth Speaker",
    price: 1999,
    category: "Electronics",
    stock: 75,
    ratings: 4.4,
    tags: ["speaker", "bluetooth", "audio"],
    createdAt: new Date()
  },
  {
    name: "Smart Watch",
    price: 4999,
    category: "Wearables",
    stock: 60,
    ratings: 4.3,
    tags: ["watch", "fitness", "smart"],
    createdAt: new Date()
  },
  {
    name: "USB-C Charger",
    price: 899,
    category: "Accessories",
    stock: 150,
    ratings: 4.2,
    tags: ["charger", "usb-c", "mobile"],
    createdAt: new Date()
  },
  {
    name: "Noise Cancelling Headphones",
    price: 6999,
    category: "Audio",
    stock: 40,
    ratings: 4.7,
    tags: ["headphones", "audio", "wireless"],
    createdAt: new Date()
  },
  {
    name: "External SSD 1TB",
    price: 7499,
    category: "Storage",
    stock: 50,
    ratings: 4.8,
    tags: ["ssd", "storage", "portable"],
    createdAt: new Date()
  },
  {
    name: "27-inch Monitor",
    price: 14999,
    category: "Computers",
    stock: 35,
    ratings: 4.5,
    tags: ["monitor", "display", "gaming"],
    createdAt: new Date()
  },
  {
    name: "Webcam HD",
    price: 1799,
    category: "Accessories",
    stock: 90,
    ratings: 4.1,
    tags: ["webcam", "camera", "video"],
    createdAt: new Date()
  }
])


db.contacts.insertMany([
  {
    name: "Alice",
    message: "Loved your website!",
    phone: "9876543210",
    createdAt: new Date()
  },
  {
    name: "Bob",
    message: "Do you have discounts on laptops?",
    phone: "9123456789",
    createdAt: new Date()
  },
  {
    name: "Carol",
    message: "I want to cancel my order.",
    phone: "9988776655",
    createdAt: new Date()
  },
  {
    name: "David",
    message: "When will my order be delivered?",
    phone: "9876501234",
    createdAt: new Date()
  },
  {
    name: "Emma",
    message: "Can I return a damaged product?",
    phone: "9765432109",
    createdAt: new Date()
  },
  {
    name: "Frank",
    message: "Great customer support experience.",
    phone: "9345678901",
    createdAt: new Date()
  },
  {
    name: "Grace",
    message: "Do you offer cash on delivery?",
    phone: "9988123456",
    createdAt: new Date()
  },
  {
    name: "Henry",
    message: "I received the wrong item.",
    phone: "9877012345",
    createdAt: new Date()
  },
  {
    name: "Isabella",
    message: "Please update me about my refund.",
    phone: "9654321870",
    createdAt: new Date()
  },
  {
    name: "Jack",
    message: "Interested in bulk purchase options.",
    phone: "9123987654",
    createdAt: new Date()
  }
])

db.orders.insertMany([
  {
    orderId: "ORD001",
    user: "John Doe",
    products: [
      { name: "Wireless Mouse", quantity: 1, price: 799 },
      { name: "Mechanical Keyboard", quantity: 1, price: 2499 }
    ],
    total: 3298,
    status: "Delivered",
    createdAt: new Date()
  },
  {
    orderId: "ORD002",
    user: "Jane Smith",
    products: [
      { name: "Gaming Laptop", quantity: 1, price: 85999 }
    ],
    total: 85999,
    status: "Pending",
    createdAt: new Date()
  },
  {
    orderId: "ORD003",
    user: "Michael Brown",
    products: [
      { name: "Bluetooth Speaker", quantity: 2, price: 1999 }
    ],
    total: 3998,
    status: "Shipped",
    createdAt: new Date()
  },
  {
    orderId: "ORD004",
    user: "Emily Davis",
    products: [
      { name: "Smart Watch", quantity: 1, price: 4999 },
      { name: "USB-C Charger", quantity: 1, price: 899 }
    ],
    total: 5898,
    status: "Delivered",
    createdAt: new Date()
  },
  {
    orderId: "ORD005",
    user: "Chris Wilson",
    products: [
      { name: "Noise Cancelling Headphones", quantity: 1, price: 6999 }
    ],
    total: 6999,
    status: "Pending",
    createdAt: new Date()
  },
  {
    orderId: "ORD006",
    user: "Sophia Taylor",
    products: [
      { name: "External SSD 1TB", quantity: 1, price: 7499 }
    ],
    total: 7499,
    status: "Delivered",
    createdAt: new Date()
  },
  {
    orderId: "ORD007",
    user: "Daniel Anderson",
    products: [
      { name: "27-inch Monitor", quantity: 1, price: 14999 },
      { name: "Webcam HD", quantity: 1, price: 1799 }
    ],
    total: 16798,
    status: "Processing",
    createdAt: new Date()
  },
  {
    orderId: "ORD008",
    user: "Olivia Thomas",
    products: [
      { name: "Mechanical Keyboard", quantity: 2, price: 2499 }
    ],
    total: 4998,
    status: "Cancelled",
    createdAt: new Date()
  },
  {
    orderId: "ORD009",
    user: "James Martin",
    products: [
      { name: "Wireless Mouse", quantity: 3, price: 799 },
      { name: "USB-C Charger", quantity: 2, price: 899 }
    ],
    total: 4195,
    status: "Shipped",
    createdAt: new Date()
  },
  {
    orderId: "ORD010",
    user: "Ava Garcia",
    products: [
      { name: "Gaming Laptop", quantity: 1, price: 85999 },
      { name: "Bluetooth Speaker", quantity: 1, price: 1999 }
    ],
    total: 87998,
    status: "Pending",
    createdAt: new Date()
  }
])