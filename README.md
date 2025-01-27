10. Food Delivery Application 
Food Delivery Application using Angular. The application will have the following features: 
1. A list of available food items. 
2. A cart where users can add food items. 
3. A service to manage cart operations (add, remove, and get the total price). 
4. Component interactions for displaying food items and managing the cart. 
Assignment Task 
Step 1: Create the Components 
• Create two components: 
1. FoodListComponent: Displays a list of available food items. 
2. CartComponent: Displays the items added to the cart and the total price. 
Step 2: Create the Service 
• Create a service named CartService to handle: 
o Adding items to the cart. 
o Removing items from the cart. 
o Getting all items in the cart. 
o Calculating the total price. 
Step 3: Implement Component-Service Interaction 
• Use the service to: 
o Allow FoodListComponent to add items to the cart. 
o Allow CartComponent to fetch and display cart items. 
Step 4: Build the Application 
• Use @Input() and @Output() to handle interactions between parent and child  
components (if needed). 
• Display the following in the CartComponent: 
o The list of items in the cart.

 
o The total price.


Detailed Requirements 
1. FoodListComponent

o Show a list of food items with their names and prices.

o Provide an "Add to Cart" button for each food item.

2. CartService

o Maintain a list of cart items.

o Methods:

▪ addToCart(foodItem: FoodItem): void: Adds an item to the cart.

▪ removeFromCart(foodItem: FoodItem): void: Removes an item 

from the cart.

▪ getCartItems(): FoodItem[]: Returns all cart items.

▪ getTotalPrice(): number: Returns the total price of items in the cart.

3. CartComponent

o Display the items in the cart.

o Show the total price.

o Provide a "Remove" button to remove items from the cart.

Give me in angular
