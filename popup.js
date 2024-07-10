document.addEventListener('DOMContentLoaded', () => {
    const onsiteCheckbox = document.getElementById('onsite');
    const remoteCheckbox = document.getElementById('remote');
    const monthAgoCheckbox = document.getElementById('monthAgo');
    const appliedCheckbox = document.getElementById('applied');
    const dollarSignCheckbox = document.getElementById('dollarSign');
  
    chrome.storage.sync.get(['settings'], (data) => {
      const settings = data.settings || {
        onsite: true,
        remote: true,
        monthAgo: true,
        applied: true,
        dollarSign: true
      };
      onsiteCheckbox.checked = settings.onsite;
      remoteCheckbox.checked = settings.remote;
      monthAgoCheckbox.checked = settings.monthAgo;
      appliedCheckbox.checked = settings.applied;
      dollarSignCheckbox.checked = settings.dollarSign;
    });
  
    const saveSettings = () => {
      const settings = {
        onsite: onsiteCheckbox.checked,
        remote: remoteCheckbox.checked,
        monthAgo: monthAgoCheckbox.checked,
        applied: appliedCheckbox.checked,
        dollarSign: dollarSignCheckbox.checked
      };
      chrome.storage.sync.set({ settings });
    };
  
    onsiteCheckbox.addEventListener('change', saveSettings);
    remoteCheckbox.addEventListener('change', saveSettings);
    monthAgoCheckbox.addEventListener('change', saveSettings);
    appliedCheckbox.addEventListener('change', saveSettings);
    dollarSignCheckbox.addEventListener('change', saveSettings);
  });
  