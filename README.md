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
