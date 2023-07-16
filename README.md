# Movie List Project

This is a Movie List project built using React functional components, Tailwind CSS, and React Router. It allows users to browse and search for movies, sort them and view details about each movie.

## Features

- **Browse Movies:** Users can browse a collection of movies with their titles, release date, and ratings displayed.

- **Search Movies:** Users can search for movies by entering keywords in the search bar.

- **Movie Details:** Users can view detailed information about a specific movie, including its synopsis, release date, cast, and reviews.

## Technologies Used

- **React:** The project is built using React, a JavaScript library for building user interfaces. It provides a component-based architecture and allows for efficient rendering and state management.

- **Functional Components:** React functional components are used to create reusable UI elements and manage the state of the application.

- **React Router:** React Router is used to handle client-side routing, allowing for navigation between different pages without a full page reload.

- **Tailwind CSS:** Tailwind CSS is a utility-first CSS framework used for styling the components. It provides a set of pre-defined classes that can be easily applied to create a responsive and visually appealing user interface.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd cybara-movie-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open your browser and visit `http://localhost:3000` to see the application.

## Project Structure

```
movie-list-project/
  |- src/
      |- components/
          Card.jsx
      |- pages/
          |- MovieDetailsPage.js
          |- MoviesPage.js
      |- App.jsx
      |- index.js
      |- index.css
  |- public/
      |- index.html
      |- ...
  |- ...
```

- **src/components:** Contains the Movie Card reusable component used throughout the application.

- **src/pages:** Contains the different pages of the application, such as Home, MoviePage, NotFound, and any additional pages you may create.

- **src/App.js:** The main component that handles routing and rendering of different pages.

- **src/index.js:** The entry point of the application where React is rendered.

## Contribution

Contributions to this project are welcome! If you have any ideas, improvements, or bug fixes, feel free to open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this code for personal or commercial purposes.

## Acknowledgements

- This project was inspired by various movie listing and watchlist applications.
- The data used for the movie listings is obtained from a public movie database API.
- The project utilizes the React, React Router, and Tailwind CSS libraries.