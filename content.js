const premiumUpdateBannerClass = "sc-jCrQrq";

const bluredElement = "sc-jagrIt";

const bluredResultsWithPremiumTitle =
  'span:is([style*="filter:blur"], [style*="filter: blur"])';

function handleDOMChanges(mutations) {
  mutations.forEach((mutation) => {
    Array.from(mutation.addedNodes).forEach((node) => {
      if (
        node.nodeType === Node.ELEMENT_NODE &&
        node.classList.contains("sc-jagrIt") &&
        node.classList.contains("kwOhRT")
      ) {
        runScript();
      }
    });
  });
}

function runScript() {
  const bannersToDelete = document.querySelectorAll(
    `.${premiumUpdateBannerClass}`
  );
  const bluredElements = document.querySelectorAll(`.${bluredElement}`);

  const bluredResults = document.querySelectorAll(
    bluredResultsWithPremiumTitle
  );

  if (bannersToDelete.length > 0) {
    for (let banner of bannersToDelete) {
      banner.style.display = "none";
    }
  }

  if (bluredElements.length > 0) {
    for (let blur of bluredElements) {
      blur.style.filter = "blur(0px)";
    }
  }

  if (bluredResults.length > 0) {
    for (let result of bluredResults) {
      result.style.filter = "blur(0px)";
    }
  }
}

const observer = new MutationObserver(handleDOMChanges);

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "unlockPremiumStatistics") {
    runScript();
  }
});
