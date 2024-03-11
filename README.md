# News Website Angular Project

This Angular project is designed to fetch and display news content from various categories using the NewsAPI service. Below are the commands used for setting up and managing this project:

## Commands

1. `ng new newswebsite`: To create a new Angular project called newswebsite.
2. `ng g c componentname`: To create a component.
3. `ng g s servicename`: To create a service.
4. `ng add @angular/material`: To add Angular Material.
5. `ng add @ng-bootstrap/ng-bootstrap`: For integrating Bootstrap.
6. `ng serve --o`: To run the application.

## Components

1. **Top Heading Component:** Displays the latest breaking news headlines and top stories.
2. **Business News Component:** Fetches and displays breaking business news.
3. **Entertainment News Component:** Fetches and displays entertainment news updates.
4. **Health News Component:** Fetches and displays health-related news articles.
5. **Science News Component:** Fetches and displays science-related news and advancements.
6. **Sports News Component:** Fetches and displays sports news updates and event details.
7. **Tech News Component:** Fetches and displays technology-related news and developments.
8. **Contact Component:** Provides a form for users to submit inquiries or feedback, utilizing Angular's built-in validators for form validation and sending data to a backend server via the `NewsAPIService`.

## Service

1. **NewsAPI Service:** Handles HTTP requests to the NewsAPI, providing methods for fetching news content across different categories. It abstracts away HTTP communication details and offers a clean interface for components to retrieve news data.

## Video Demonstration

Watch the project in action through this [video demonstration](https://drive.google.com/drive/folders/1ZGaQCZJgw1d19TZxENIIpWKf_jq56Ncc?usp=sharing).

This detailed overview provides insights into each component's purpose and how they interact with the NewsAPI service to fetch and display news content. The project aims to offer users easy access to news from various categories and enables them to reach out with inquiries or feedback via the contact form.
