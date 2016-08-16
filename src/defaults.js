export default {
  namespace: 'asIconPicker',
  source: false, // Icons source
  tooltip: true,
  hasSearch: true,
  extraClass: 'fa',
  iconPrefix: 'fa-',
  emptyText: 'None Selected',
  searchText: 'Search',
  cancelSelected: true,
  keyboard: true,
  flat: false,
  heightToScroll: '290',

  iconPicker() {
    'use strict';
    return '<div class="namespace-selector">' +
      '<span class="namespace-selected-icon">' +
      'None selected' +
      '</span>' +
      '<span class="namespace-selector-arrow">' +
      '<i></i>' +
      '</span>' +
      '</div>' +
      '<div class="namespace-selector-popup">' +
      '<div class="namespace-icons-container"></div>' +
      '</div>';
  },
  iconSearch() {
    'use strict';
    return '<div class="namespace-selector-search">' +
      '<input type="text" name="" value="" placeholder="searchText" class="namespace-search-input"/>' +
      '<i class="namespace-search-icon"></i>' +
      '</div>';
  },
  formatNoMatches() {
    'use strict';
    return 'No matches found';
  },
  errorHanding() {},
  process(value) {
    'use strict';
    if (value && value.match(this.iconPrefix)) {
      return value.replace(this.iconPrefix, '');
    }
    return value;
  },
  parse(value) {
    'use strict';
    if (value.match(this.iconPrefix)) {
      return value;
    }
    return this.iconPrefix + value;
  },
  // callback
  onInit: null,
  onReady: null,
  onAfterFill: null
};
