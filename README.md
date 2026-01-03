# lead-generator


***

## Project Description

This project is a simple **Chrome extension** that lets users save website URLs as "leads" directly from the browser. The popup UI provides an input field to manually add a URL, a button to save the current tab, and a list area that displays all saved leads as clickable links that open in new tabs. Saved leads are persisted using the browser's localStorage API so the list remains available across sessions until the user clears it.

***

## Features

- Save a lead by typing a URL and clicking **SAVE INPUT**.  
- Save the **current browser tab** with **SAVE TAB** using `chrome.tabs.query`.  
- Display all saved leads in an unordered list, each as a clickable `<a>` link opening in a new tab (`target="_blank"`).  
- Persist leads across popup closes and browser restarts using `localStorage` with JSON `stringify` / `parse`.  
- Clear all saved leads with a **DELETE** button (double-click) that removes the data and re-renders an empty list.

***

## Technologies and Concepts Practiced

From the recap slide and your code, this project demonstrates:

- **const**: Using block-scoped constants for DOM references and configuration.  
- **addEventListener()**: Attaching event listeners for button clicks and double-clicks to drive UI behavior.  
- **innerHTML**: Injecting dynamically generated HTML strings into the `<ul>` to render the list of leads.  
- **input.value**: Reading user input from a text field to create new leads.  
- **Function parameters**: Passing the `leads` array into a `render(leads)` function to separate logic from UI rendering.  
- **Template strings**: Using backtick (`` ` ``) template literals with `${}` to build `<li>` + `<a>` markup more cleanly than string concatenation.  
- **localStorage**:  
  - `localStorage.setItem("myLeads", JSON.stringify(myLeads))` to persist the array.  
  - `JSON.parse(localStorage.getItem("myLeads"))` to restore data on popup load.  
- **The JSON object**: Converting between JavaScript arrays and JSON strings with `JSON.stringify` and `JSON.parse`.  
- **Objects in arrays** (conceptual extension): Understanding how arrays can store complex items (e.g., URLs plus metadata) even though current version uses plain strings.

***

## How It Works (High-Level)

1. On popup load, the script checks `localStorage` for an existing `"myLeads"` key, parses it if present, copies it into `myLeads`, and calls `render(myLeads)` so previous leads appear immediately.  
2. Clicking **SAVE INPUT** pushes `inputEl.value` into `myLeads`, updates `localStorage`, and re-renders the list.  
3. Clicking **SAVE TAB** queries the active tab's URL with `chrome.tabs.query`, pushes the URL into `myLeads`, saves to `localStorage`, and re-renders.  
4. Double‑clicking **DELETE** clears the stored data and resets the in‑memory array, then calls `render` to show an empty list.

***
