// ---- Site views counter ----
async function updateViews() {
    try {
      const res = await fetch('/api/views');
      const { views } = await res.json();
      document.getElementById('view-count').textContent = views.toLocaleString();
    } catch (e) {
      console.error('Could not load view count', e);
      document.getElementById('view-count').textContent = '–––';
    }
  }
  updateViews();
  
  // ---- Optional: handle instant search redirect ----
  document.getElementById('search-form').addEventListener('submit', e => {
    // You could hookup client-side search here.
    // For now, just let it do a GET /search?q=…
  });
  