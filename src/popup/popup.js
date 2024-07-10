document.addEventListener('DOMContentLoaded', function() {
  // Get checkboxes
  const onsiteCheckbox = document.getElementById('onsite');
  const remoteCheckbox = document.getElementById('remote');
  const monthAgoCheckbox = document.getElementById('monthAgo');
  const appliedCheckbox = document.getElementById('applied');
  const dollarSignCheckbox = document.getElementById('dollarSign');

  // Load saved settings
  chrome.storage.sync.get(['onsite', 'remote', 'monthAgo', 'applied', 'dollarSign'], function(result) {
    onsiteCheckbox.checked = result.onsite ?? true;
    remoteCheckbox.checked = result.remote ?? true;
    monthAgoCheckbox.checked = result.monthAgo ?? true;
    appliedCheckbox.checked = result.applied ?? true;
    dollarSignCheckbox.checked = result.dollarSign ?? true;
  });

  // Save settings and update content script in real-time
  onsiteCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({onsite: onsiteCheckbox.checked});
    updateContentScript();
  });

  remoteCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({remote: remoteCheckbox.checked});
    updateContentScript();
  });

  monthAgoCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({monthAgo: monthAgoCheckbox.checked});
    updateContentScript();
  });

  appliedCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({applied: appliedCheckbox.checked});
    updateContentScript();
  });

  dollarSignCheckbox.addEventListener('change', function() {
    chrome.storage.sync.set({dollarSign: dollarSignCheckbox.checked});
    updateContentScript();
  });

  function updateContentScript() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: 'updateSettings'});
    });
  }
});
