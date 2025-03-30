React Profile & Dashboard App


Follow these steps to run the project locally:
1. Clone or Download the Project
    Clone Or download ZIP 
    → Click **Code** > **Download ZIP**  
    → Extract and open the folder in your editor

2. Install Dependencies
    npm install

3. Create `.env` File
    Create a `.env` file in the root of the project with this content:
    VITE_API_URL=https://dummyjson.com/users/2

4.  Start the Development Server
    npm run dev


This project is a modern and responsive React application featuring:

- Editable user profile form with validation and mock API integration
- Interactive dashboard with charts, cards, and recent transactions
- Fully responsive layout for mobile and desktop


Features
    Edit Profile Form
        - Fetches user data from [DummyJSON API](https://dummyjson.com/users/2)
        - Form validation for all fields:
        - Required fields
        - Email format validation
        - Password must be at least 8 characters
        - Image upload preview on profile picture click
        - Save button:
        - Disabled until changes are made
        - Shows "Saving..." while saving
        - Disabled again after successful save
        - Saves updated data to `localStorage` to simulate persistence

    Dashboard Overview
        The dashboard includes a dynamic and responsive layout built with Tailwind CSS.
        Includes the following sections:
            My Cards                 
            Recent Transactions                  
            Weekly Activity                    
            Expense Statistics                
            Quick Transfer            
            Balance History                             
        All dashboard sections are **mobile-first and fully responsive**.






