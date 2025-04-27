# Add To Cart -Task using React js

## Overview

Create a ReactJS application that fetches product data from the Fake Store API and allows users to add products to the cart through a modal interface using **ReactJs**, **HTML**,**TailwindCss** And **javascript**.

## Tech Stack

- **ReactJs** and **HTML** for structure
- **TailwindCss** for styling
- **Axios** to Fetch API data
- **Daisyui** to add Components for Tailwind Style
- **VSCode** for development
- **JavaScript** for applying logics

## Logics

- **In App Component -** Get data from Fake API link using Axios and store that data in useState (Products). call this fetchdata function in useEffect Hook . after data stored transfer products states to Content component through Navbar component.

- **In Navbar Component -** 1-Creating two useStates to count the added item value (value) and store the added items in cart (cartItems) and transfer these two like props to content and cartlist Component. After maping process transfering Products to Content page to display all products with unique keyword to acces user-freindly.

- **In Content Component -** Display all products dynamically with unique key and add to cart button . In this add to cart button has handleSubmit function . this function will give you particular product which you clicked that product details. this function will check exisiting items to find this product is already in cartItems are not . if already is there retun alert "Item already added to the cart"else retun setCartItem function to add particular product into cartItem array (using spread operator) and total cartitems length will increase through setValue function

- **In CartList Component -** added cartItems products will display here dynamically in modelbox through this component with unique key and remov from cart button. This button has remove from cart function and this function will return particular button which product button you clicked that details will give this function. that detail (cartItem) pass as parameter of remove function. this remove function is call back function. this function placed in Navbar Component. that function will give you reult of which product you clicked remove from cart button that product details pass through filter function to display modal box remaing cartItems and total cartItems length will decrease through setValue function .

## How to Use

- **step-1 -** Click the Add to Cart button which you want to added to your cart . !important - if click add to cart button two times for same product you will get alret like this product already added in cart

- **step-2 -** click cart icon to see your cart lists. You can see the total number of cartItems in top rightside of that cart icon

- **step-3 -** If you want to remove any of product from your CartItem just click Remove From Cart button. you will see remaining cartItems

## Features

- Responsive Design
- Clean and Minimalistic Layout

## Demo

- https://addtocart-e-shop.netlify.app/

## Authors

- [@ Vengat p](https://github.com/Vengat-P)
