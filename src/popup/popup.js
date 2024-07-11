document.addEventListener('DOMContentLoaded', () => {
  const onsiteCheckbox = document.getElementById('onsiteCheckbox');
  const remoteCheckbox = document.getElementById('remoteCheckbox');
  const monthAgoCheckbox = document.getElementById('monthAgoCheckbox');
  const appliedCheckbox = document.getElementById('appliedCheckbox');
  const dollarSignCheckbox = document.getElementById('dollarSignCheckbox');
  const saveButton = document.getElementById('saveButton');

  // Load the saved settings
  chrome.storage.sync.get({
    onsite: false,
    remote: false,
    monthAgo: false,
    applied: false,
    dollarSign: false
  }, (items) => {
    onsiteCheckbox.checked = items.onsite;
    remoteCheckbox.checked = items.remote;
    monthAgoCheckbox.checked = items.monthAgo;
    appliedCheckbox.checked = items.applied;
    dollarSignCheckbox.checked = items.dollarSign;
  });

  // Save the settings when the save button is clicked
  saveButton.addEventListener('click', () => {
    chrome.storage.sync.set({
      onsite: onsiteCheckbox.checked,
      remote: remoteCheckbox.checked,
      monthAgo: monthAgoCheckbox.checked,
      applied: appliedCheckbox.checked,
      dollarSign: dollarSignCheckbox.checked
    }, () => {
      alert('Settings saved');
    });
  });
});
