//SENtinel IDEa TAKen from AI


let currentPage = 1;
let isFetching = false;
let hasMore = true;
const sentinel = document.getElementById('loading-sentinel');
const getDataForHomePage = async () => {
  if (isFetching || !hasMore) return;
  isFetching = true;
  try{
  const getData = await fetch(
    `http://localhost:3998/api/data?page=${currentPage}`
  );

  if (getData.ok) {
    const receivedData = await getData.json();
    if(receivedData.length===0){
        hasMore=false;
        sentinel.innerText = "No more data available";
        return;
    }

    receivedData.forEach((item) => {
      const newDiv = document.createElement("div");

      newDiv.className = "data-entry-box";
      newDiv.setAttribute("id", item.id);
      newDiv.innerHTML = `
        <div>
           <input type="checkbox">
           <span class="data-entry-box_itemName">${item.itemName}</span>
        </div>
        <div class="data-entry-box_options"> 
           <i class="fi fi-rr-menu-dots-vertical"></i>
        </div>
      `;
      const divContainer = document.querySelector(".data-entry-container");
      divContainer.append(newDiv);
    }
    
);
currentPage++;
  }
  
  }
  catch(error){console.error("Error loading posts:", error);
        sentinel.innerText = "Error loading data!";
    } finally {
        // Unlock the function so it can be called again
        isFetching = false;
    }
};
// --- INTERSECTION OBSERVER SETUP ---
// The IntersectionObserver watches elements and tells you when they enter the viewport.

const observerOptions = {
    root: null,       // null means use the browser viewport as the viewing area
    rootMargin: '0px',
    threshold: 0.1    // Trigger callback when 10% of the sentinel is visible
};

const observer = new IntersectionObserver((entries) => {
    // 'entries' is an array of watched elements (we only have one)
    const entry = entries[0];

    // If the sentinel (loading text) is visible on screen...
    if (entry.isIntersecting) {
        // ...load the next batch of posts!
        getDataForHomePage();
    }
}, observerOptions);

// Start watching the sentinel element
observer.observe(sentinel);
