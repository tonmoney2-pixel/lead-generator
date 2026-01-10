

# lead-generator

***

## Project Description

This project is a simple **mobile app** that lets users save website URLs as "leads" while browsing on their phone. The UI provides an input field to manually add a URL, a button to save the current lead, and a list area that displays all saved leads as clickable items that open in the device browser. Saved leads are stored in a **Firebase database**, so the list is persisted online and can be retrieved across app sessions and devices as long as the user’s data is available in Firebase.

***

## Features

- Save a lead by typing a URL and tapping a **Save** button.  
- Display all saved leads in a scrollable list, each as a tappable item that opens the URL in the device browser.  
- Persist leads across app closes, phone restarts, and installs on other devices by storing them in a Firebase database.  
- Clear all saved leads with a **Delete** action that removes the data from Firebase and refreshes the list in the UI.

***

## Technologies and Concepts Practiced

This project demonstrates:

- **const / let**: Using block-scoped variables for UI references, app state, and configuration.  
- **Event listeners / handlers**: Reacting to button taps and list interactions to drive app behavior.  
- **Dynamic rendering**: Generating list items from an in‑memory `leads` array and updating the UI when data changes.  
- **input.value / controlled inputs**: Reading user input from a text field to create new leads.  
- **Function parameters**: Passing the `leads` array (or snapshots from Firebase) into a `render(leads)` function to separate logic from UI rendering.  
- **Template strings**: Using backtick template literals with `${}` to build UI markup or component props more cleanly than string concatenation.  
- **Firebase database**:  
  - Writing leads from the app state into Firebase when the user saves a new lead.  
  - Reading leads from Firebase on app startup (and optionally on data change) to hydrate the `leads` array.  
- **The JSON object**: Understanding that data sent to and received from Firebase is structured JSON, compatible with JavaScript arrays and objects.  
- **Objects in arrays**: Recognizing that the leads list can be extended to store richer objects (e.g., URL plus title, timestamp, or tags) rather than plain strings.

***

## How It Works (High-Level)

1. On app launch, the script connects to Firebase and reads the existing leads collection or node. The data is mapped into the `leads` array and passed into `render(leads)` so any previously saved leads appear immediately in the list.  
2. Tapping **Save** takes the current input value, pushes it into the `leads` array, writes the updated data (or a new record) to Firebase, clears the input, and calls `render(leads)` to update the on‑screen list.  
3. When Firebase data changes (for example, on another device), a listener can update the `leads` array and re‑render, keeping the app in sync with the database.  
4. Using a **Delete** action removes the leads from Firebase (either clearing the collection or specific items) and resets the in‑memory `leads` array, then calls `render` to show an empty or updated list.  

***