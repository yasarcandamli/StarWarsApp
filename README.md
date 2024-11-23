# Star Wars App 🚀

A React-based web application that provides detailed information about Star Wars starships. The app fetches data from the **Star Wars API (SWAPI)** and allows users to search, view, and explore details about starships.

## Features ✨

- **Search Functionality:** Filter starships by name or model.
- **Infinite Scrolling:** Load more starships dynamically.
- **Detailed View:** View starship-specific details on a separate page.

## Usage 🚀

### Search for Starships

1. Type a name or model in the search bar to filter the starship list.
2. Results dynamically update based on your input.

### View Starship Details

1. Click the Details button on any starship card.
2. A new page displays detailed information about the selected starship.

### Load More Starships

1. Scroll to the bottom of the list.
2. Click the Load More button to fetch additional starships from the API.

## Technologies Used 🛠️

- **React**: JavaScript library for building user interfaces.
- **React Router**: For navigation between pages.
- **Axios**: To fetch data from the SWAPI API.
- **CSS**: Styling the application.

## API Reference 🌌

The app uses the [SWAPI - Star Wars](https://swapi.dev/) API for fetching starship data.

### Endpoints

- **Starships List**: `https://swapi.dev/api/starships/`
- **Starship Detail**: `https://swapi.dev/api/starships/:id`
