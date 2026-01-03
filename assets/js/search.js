/*!
 * FixIt-compatible Lunr.js search script
 * Works with FixIt v0.4.0-beta and Hugo-generated index.json
 */

(function () {
  const searchInput = document.querySelector('#search-input');
  const searchResults = document.querySelector('#search-results');
  const searchContainer = document.querySelector('.search-container');

  if (!searchInput || !searchResults) {
    console.warn("Search elements not found in DOM.");
    return;
  }

  let idx = null;
  let documents = [];

  // Load index.json
  fetch('/index.json')
    .then(response => response.json())
    .then(data => {
      documents = data;

      idx = lunr(function () {
        this.ref('objectID');
        this.field('title');
        this.field('content');
        this.field('tags');
        this.field('categories');

        data.forEach(doc => this.add(doc));
      });
    })
    .catch(err => console.error("Error loading search index:", err));

  // Handle input
  searchInput.addEventListener('input', function () {
    const query = this.value.trim();

    if (!query) {
      searchResults.innerHTML = '';
      return;
    }

    if (!idx) {
      searchResults.innerHTML = '<p>Loading search index…</p>';
      return;
    }

    const results = idx.search(query + '*');

    if (results.length === 0) {
      searchResults.innerHTML = '<p>No results found.</p>';
      return;
    }

    // Build results list
    let html = '<ul class="search-result-list">';
    results.forEach(result => {
      const doc = documents.find(d => d.objectID === result.ref);
      if (doc) {
        html += `
          <li class="search-result-item">
            <a href="${doc.uri}">
              <strong>${doc.title}</strong>
              <p>${doc.content.substring(0, 150)}...</p>
            </a>
          </li>
        `;
      }
    });
    html += '</ul>';

    searchResults.innerHTML = html;
  });
})();
