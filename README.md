/* General Styles */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Navigation Menu */
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #007BFF;
    color: white;
}

.nav-links {
    list-style-type: none;
    display: flex;
    gap: 1rem;
}

.nav-links a {
    color: white;
    text-decoration: none;
    font-weight: bold;
}

.nav-links a:hover {
    text-decoration: underline;
}

/* Filter Section */
.filter-section {
    padding: 1rem;
    background-color: #f4f4f4;
    width: 20%;
    float: left;
    height: 100vh;
}

.filter-section h3 {
    margin-bottom: 1rem;
}

.filter-group {
    margin-bottom: 1rem;
}

/* Product Grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
    margin-left: 20%; /* Leave space for the filter */
    background-color: #f9f9f9;
}

.product-card {
    background: white;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-card img {
    max-width: 100%;
    border-radius: 8px;
    margin-bottom: 1rem;
}

.product-card h4 {
    margin-bottom: 0.5rem;
    font-size: 1.2rem;
    color: #333;
}

/* Cart Summary */
.cart-summary {
    padding: 1rem;
    background-color: #f4f4f4;
    width: 20%;
    float: right;
    height: 100vh;
}

.cart-summary h3 {
    margin-bottom: 1rem;
}

.cart-summary ul {
    list-style-type: none;
    padding: 0;
    margin: 0 0 1rem 0;
}

.cart-summary li {
    margin-bottom: 0.5rem;
}

.cart-summary p {
    font-weight: bold;
}


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>E-Commerce Product Showcase</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Navigation Menu -->
    <nav class="navbar">
        <div class="logo">ElectroShop</div>
        <ul class="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">Products</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </nav>

    <!-- Filter Section -->
    <aside class="filter-section">
        <h3>Filter By</h3>
        <div class="filter-group">
            <label for="category">Category:</label>
            <select id="category">
                <option value="all">All</option>
                <option value="laptops">Laptops</option>
                <option value="phones">Phones</option>
                <option value="accessories">Accessories</option>
            </select>
        </div>
        <div class="filter-group">
            <label for="price">Price Range:</label>
            <select id="price">
                <option value="all">All</option>
                <option value="low">Below $500</option>
                <option value="medium">$500 - $1000</option>
                <option value="high">Above $1000</option>
            </select>
        </div>
    </aside>

    <!-- Product Grid -->
    <main class="product-grid">
        <div class="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 1">
            <h4>Smartphone X</h4>
            <p>Category: Phones</p>
            <p>Price: $899</p>
            <p>Rating: 4.5</p>
        </div>
        <div class="product-card">
            <img src="https://via.placeholder.com/150" alt="Product 2">
            <h4>Laptop Pro</h4>
            <p>Category: Laptops</p>
            <p>Price: $1200</p>
            <p>Rating: 4.8</p>
        </div>
        <!-- Repeat similar product cards for other sample data -->
    </main>

    <!-- Cart Summary -->
    <aside class="cart-summary">
        <h3>Cart Summary</h3>
        <ul>
            <li>Product 1: $899</li>
            <li>Product 2: $1200</li>
            <!-- Cart items will be dynamically added here -->
        </ul>
        <p>Total: $2099</p>
    </aside>
</body>
</html>


