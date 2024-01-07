
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('unlockPremiumStatistics').addEventListener('click', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'unlockPremiumStatistics' });
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const openNewTabLink = document.getElementById('openNewTabLink');

  openNewTabLink.addEventListener('click', function (event) {
    event.preventDefault();

    chrome.tabs.create({ url: 'https://github.com/anof1r/faceit_stats_unlocker' });
  });
});