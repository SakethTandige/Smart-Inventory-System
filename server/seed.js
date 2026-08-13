const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./src/models/Product");

dotenv.config();

const sampleProducts = [
  {
    name: "Laptop",
    category: "Electronics",
    price: 999.99,
    quantity: 5,
    supplier: "Tech Supplies Co.",
    lowStockThreshold: 3,
  },
  {
    name: "Office Chair",
    category: "Furniture",
    price: 249.99,
    quantity: 12,
    supplier: "Furniture Plus",
    lowStockThreshold: 5,
  },
  {
    name: "Desk Lamp",
    category: "Lighting",
    price: 49.99,
    quantity: 2,
    supplier: "Light World",
    lowStockThreshold: 5,
  },
  {
    name: "USB Cable",
    category: "Accessories",
    price: 9.99,
    quantity: 50,
    supplier: "Cable Express",
    lowStockThreshold: 20,
  },
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 29.99,
    quantity: 8,
    supplier: "Tech Supplies Co.",
    lowStockThreshold: 5,
  },
  {
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 89.99,
    quantity: 0,
    supplier: "Gaming Gear",
    lowStockThreshold: 3,
  },
  {
    name: "Monitor Stand",
    category: "Furniture",
    price: 39.99,
    quantity: 4,
    supplier: "Furniture Plus",
    lowStockThreshold: 3,
  },
  {
    name: "Desk Organizer",
    category: "Office Supplies",
    price: 19.99,
    quantity: 25,
    supplier: "Office Depot",
    lowStockThreshold: 10,
  },
  {
    name: "Webcam",
    category: "Electronics",
    price: 59.99,
    quantity: 3,
    supplier: "Tech Supplies Co.",
    lowStockThreshold: 5,
  },
  {
    name: "External Hard Drive",
    category: "Storage",
    price: 99.99,
    quantity: 7,
    supplier: "Storage Solutions",
    lowStockThreshold: 4,
  },
  {
    name: "Notebook Set",
    category: "Office Supplies",
    price: 14.99,
    quantity: 0,
    supplier: "Office Depot",
    lowStockThreshold: 15,
  },
  {
    name: "Printer Paper",
    category: "Office Supplies",
    price: 5.99,
    quantity: 100,
    supplier: "Office Depot",
    lowStockThreshold: 30,
  },
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✓ Connected to MongoDB");

    // Clear existing products
    await Product.deleteMany({});
    console.log("✓ Cleared existing products");

    // Insert sample products
    const result = await Product.insertMany(sampleProducts);
    console.log(`✓ Added ${result.length} sample products`);

    console.log("\n✨ Database seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error.message);
    process.exit(1);
  }
}

seedDatabase();
