// Function to style job posts based on specific keywords
const styleJobPosts = (settings) => {
  // Select all job post elements
  const jobPosts = document.querySelectorAll('.job-card-container, .result-card, .jobs-search__results-list li');

  jobPosts.forEach(jobPost => {
    const jobText = jobPost.innerText.toLowerCase();
    
    // Reset styles
    jobPost.style.backgroundColor = '';
    let parent = jobPost.closest('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
    if (parent) {
      parent.style.display = '';
    }

    // Apply styles based on settings
    if (settings.onsite && (jobText.includes('onsite') || jobText.includes('on-site'))) {
      jobPost.style.backgroundColor = '#ff0000b8'; // Red background for onsite
    }
    if (settings.remote && jobText.includes('remote')) {
      jobPost.style.backgroundColor = '#b5ffb5'; // Green background for remote
    }
    if (settings.monthAgo && jobText.includes('month ago')) {
      jobPost.style.backgroundColor = '#ff0000b8'; // Red background for month ago
    }
    if (settings.applied) {
      const appliedItems = jobPost.querySelectorAll('.job-card-container__footer-item.job-card-container__footer-job-state.t-bold');
      appliedItems.forEach(item => {
        if (item.innerText.toLowerCase().includes('applied')) {
          if (parent) {
            parent.style.display = 'none';
          }
        }
      });
    }
    if (settings.dollarSign) {
      const metadataItems = jobPost.querySelectorAll('.job-card-container__metadata-item');
      let hasDollarSign = false;
      metadataItems.forEach(metadataItem => {
        if (metadataItem.innerText.includes('$')) {
          hasDollarSign = true;
        }
      });
      if (!hasDollarSign && parent) {
        parent.style.display = 'none';
      }
    }
  });
};

// Run the function to style job posts
chrome.storage.sync.get(['onsite', 'remote', 'monthAgo', 'applied', 'dollarSign'], function(result) {
  styleJobPosts(result);
});

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'updateSettings') {
    chrome.storage.sync.get(['onsite', 'remote', 'monthAgo', 'applied', 'dollarSign'], function(result) {
      styleJobPosts(result);
    });
  }
});
