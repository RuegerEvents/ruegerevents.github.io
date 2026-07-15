var tagFilterBar = document.querySelector('[data-tag-filter-bar]');
var workGrid = document.querySelector('[data-work-filter-target]');

function normalizeTag(value) {
  return (value || '').trim().toLowerCase();
}

if (tagFilterBar && workGrid) {
  var tagPills = tagFilterBar.querySelectorAll('[data-tag-filter]');
  var workCards = workGrid.querySelectorAll('[data-work-card]');

  var applyTagFilter = function (term) {
    var normalizedTerm = normalizeTag(term);
    workCards.forEach(function (card) {
      var cardTags = normalizeTag(card.getAttribute('data-tags')).split(',');
      var isVisible = !normalizedTerm || cardTags.indexOf(normalizedTerm) !== -1;
      card.classList.toggle('is-hidden', !isVisible);
    });
    tagPills.forEach(function (pill) {
      var pillTerm = normalizeTag(pill.getAttribute('data-tag-filter'));
      pill.classList.toggle('is-active', pillTerm === normalizedTerm);
    });
  };

  tagPills.forEach(function (pill) {
    pill.addEventListener('click', function (event) {
      event.preventDefault();
      applyTagFilter(pill.getAttribute('data-tag-filter'));
    });
  });
}
