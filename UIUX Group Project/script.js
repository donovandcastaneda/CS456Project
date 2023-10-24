// Get references to the tab links and tab content
const tabLinks = document.querySelectorAll("nav ul li a");
const tabContents = document.querySelectorAll("#tab-content > div");

// Function to hide all tab contents
function hideTabContents() {
    tabContents.forEach(content => {
        content.style.display = "none";
    });
}

// Function to show the selected tab's content
function showTabContent(tabId) {
    const tabContent = document.getElementById(tabId + "-content");
    if (tabContent) {
        tabContent.style.display = "block";
    }
}

// Add click event listeners to tab links
tabLinks.forEach(tabLink => {
    tabLink.addEventListener("click", function (event) {
        event.preventDefault();

        // Hide all tab contents
        hideTabContents();

        // Get the tab ID from the clicked link
        const tabId = this.id;
        console.log("TAB CLICKED: " + tabId); //debugging

        // Show the selected tab's content
        showTabContent(tabId);
    });
});

// Initially show the content for the first tab (Tab 1)
hideTabContents();
showTabContent("tab1");