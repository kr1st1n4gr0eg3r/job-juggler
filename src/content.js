chrome.storage.sync.get({
  onsite: false,
  remote: false,
  monthAgo: false,
  applied: false,
  dollarSign: false
}, (items) => {
  const styleJobPosts = () => {
    const jobPosts = document.querySelectorAll('.job-card-container, .result-card, .jobs-search__results-list li');

    jobPosts.forEach(jobPost => {
      const jobText = jobPost.innerText.toLowerCase();

      if (items.onsite && (jobText.includes('onsite') || jobText.includes('on-site'))) {
        jobPost.style.backgroundColor = '#ff0000b8';
      } 
      if (items.remote && jobText.includes('remote')) {
        jobPost.style.backgroundColor = '#b5ffb5';
      } 
      if (items.monthAgo && jobText.includes('month ago')) {
        jobPost.style.backgroundColor = '#ff0000b8';
      }

      if (items.applied) {
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

      if (items.dollarSign) {
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

  styleJobPosts();
  
  const observer = new MutationObserver(styleJobPosts);
  observer.observe(document.body, { childList: true, subtree: true });
});
