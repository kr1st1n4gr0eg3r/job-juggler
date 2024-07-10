// Function to style job posts based on specific keywords
const styleJobPosts = (settings) => {
    // Select all job post elements
    const jobPosts = document.querySelectorAll('.job-card-container, .result-card, .jobs-search__results-list li');
  
    jobPosts.forEach(jobPost => {
      const jobText = jobPost.innerText.toLowerCase();
  
      if (settings.onsite && (jobText.includes('onsite') || jobText.includes('on-site'))) {
        jobPost.classList.add('onsite-job'); // Add a class for onsite jobs
      } 
      if (settings.remote && jobText.includes('remote')) {
        jobPost.classList.add('remote-job'); // Add a class for remote jobs
      } 
      if (settings.monthAgo && jobText.includes('month ago')) {
        jobPost.classList.add('month-ago-job'); // Add a class for month ago jobs
      }
  
      // Hide the job post if "Applied" is found in the specific <li>
      if (settings.applied) {
        const appliedItems = jobPost.querySelectorAll('.job-card-container__footer-item.job-card-container__footer-job-state.t-bold');
        appliedItems.forEach(item => {
          if (item.innerText.toLowerCase().includes('applied')) {
            let parent = jobPost.closest('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
            if (parent) {
              parent.style.display = 'none';
            }
          }
        });
      }
  
      // Hide the job post if <li class="job-card-container__metadata-item"> does not contain "$"
      if (settings.dollarSign) {
        const metadataItems = jobPost.querySelectorAll('.job-card-container__metadata-item');
        let hasDollarSign = false;
        metadataItems.forEach(metadataItem => {
          if (metadataItem.innerText.includes('$')) {
            hasDollarSign = true;
          }
        });
        if (!hasDollarSign) {
          let parent = jobPost.closest('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
          if (parent) {
            parent.style.display = 'none';
          }
        }
      }
    });
  };
  
  // Load user settings and apply styles
  chrome.storage.sync.get(['settings'], (data) => {
    const settings = data.settings || {
      onsite: true,
      remote: true,
      monthAgo: true,
      applied: true,
      dollarSign: true
    };
    styleJobPosts(settings);
  });
  
  // Re-run the function if the page content changes (e.g., when scrolling)
  const observer = new MutationObserver(() => {
    chrome.storage.sync.get(['settings'], (data) => {
      const settings = data.settings || {
        onsite: true,
        remote: true,
        monthAgo: true,
        applied: true,
        dollarSign: true
      };
      styleJobPosts(settings);
    });
  });
  observer.observe(document.body, { childList: true, subtree: true });
  