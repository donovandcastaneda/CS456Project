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

//function to change header sizes. Just makes code cleaner
function headersSize(h1, h2, h3, h4, h5, h6, size1, size2, size3, size4, size5, size6) {
    $(h1).css("fontSize", size1);
    $(h2).css("fontSize", size2);
    $(h3).css("fontSize", size3);
    $(h4).css("fontSize", size4);
    $(h5).css("fontSize", size5);
    $(h6).css("fontSize", size6);
}


$(document).ready(function(){
    //Adding animation for tab selection    
    $(".page-nav .list-group-item").click(function(e) {
        $(".page-nav .list-group-item").removeClass("active");
        $(e.target).addClass("active");
     });
    
     //Adding the knowlage for text and font options
     $('#visualOpts').on('click', function () {
        switch(parseInt($('#textSize').val())) {
            case 0:
                $("p, li, a").css("fontSize", "16px");
                headersSize("h1", "h2", "h3", "h4", "h5", "h6", "2em", "1.5em", "1.17em", "1em", ".83em", ".67em");
              break;
            case 1:
                $("p, li, a").css("fontSize", "32px");
                headersSize("h1", "h2", "h3", "h4", "h5", "h6", "4em", "3em", "2.34em", "1em", "1.66em", "1.34em");

              break;
            case 2:

                $("p, li, a").css("fontSize", "10px");
                headersSize("h1", "h2", "h3", "h4", "h5", "h6", "1em", ".75em", ".585em", ".5em", ".415em", ".335em");

                break;
            default:
                $("p, li, a").css("fontSize", "16px");
                headersSize("h1", "h2", "h3", "h4", "h5", "h6", "2em", "1.5em", "1.17em", "1em", ".83em", ".67em");
          }

        switch(parseInt($('#pageColor').val())) {
            case 0:
                $("#navbar").css("background-color", "#1926d7");
                $("#modal-btn-act").removeClass().addClass("btn btn-secondary");
            break;
            case 1:
                $("#navbar").css("background-color", "gray");
                $("#modal-btn-act").removeClass().addClass("btn btn-dark");
            break;
            case 2:
                $("#navbar").css("background-color", "red");
                $("#modal-btn-act").removeClass().addClass("btn btn-info");
                break;
            default:
                $("#navbar").css("background-color", "#1926d7");
        }

        $("#exampleModal").modal('hide');
     });
 });

