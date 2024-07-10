// Function to style job posts based on specific keywords
const styleJobPosts = () => {
  // Select all job post elements
  const jobPosts = document.querySelectorAll('.job-card-container, .result-card, .jobs-search__results-list li');

  jobPosts.forEach(jobPost => {
    const jobText = jobPost.innerText.toLowerCase();
    if (jobText.includes('onsite') || jobText.includes('on-site')) {
      jobPost.style.backgroundColor = '#ff0000b8'; // Red background for onsite
    } 
    if (jobText.includes('remote')) {
      jobPost.style.backgroundColor = '#b5ffb5'; // Green background for remote
    } 
    if (jobText.includes('month ago')) {
      jobPost.style.backgroundColor = '#ff0000b8'; // Red background for month ago
    }
    // Highlight "reposted" in red if it appears in a span element
    const repostedSpans = jobPost.querySelectorAll('span');
    repostedSpans.forEach(span => {
      if (span.innerText.toLowerCase().includes('reposted')) {
        span.style.backgroundColor = '#ff0000b8'; // Red background for "reposted"
      }
    });

    // Highlight "Reposted" in red and underline if it appears in the specific div
    const repostedDivs = jobPost.querySelectorAll('.jobs-details__main-content .t-14 div');
    repostedDivs.forEach(div => {
      if (div.innerText.toLowerCase().includes('reposted')) {
        div.style.color = '#ff0000'; // Red text for "reposted" in specified divs
        div.style.textDecoration = 'underline'; // Underline for "reposted"
      }
    });

    // Hide the job post if "Applied" is found in the specific <li>
    const appliedItems = jobPost.querySelectorAll('.job-card-container__footer-item.job-card-container__footer-job-state.t-bold');
    appliedItems.forEach(item => {
      if (item.innerText.toLowerCase().includes('applied')) {
        let parent = jobPost.closest('.ember-view.jobs-search-results__list-item.occludable-update.p0.relative.scaffold-layout__list-item');
        if (parent) {
          parent.style.display = 'none';
        }
      }
    });
  });
};

// Run the function to style job posts
styleJobPosts();

// Re-run the function if the page content changes (e.g., when scrolling)
const observer = new MutationObserver(styleJobPosts);
observer.observe(document.body, { childList: true, subtree: true });
