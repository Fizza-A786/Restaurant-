// Minimal API client stub used by Footer newsletter subscription during development
export const apiClient = {
  subscribeNewsletter: async (email, options = {}, tenantId = 'default') => {
    // Simulate a network call; return success. Adjust to call real API when available.
    try {
      // Example: return await fetch('/api/newsletter', { method: 'POST', body: JSON.stringify({ email, tenantId }) })
      return { success: true };
    } catch (err) {
      return { error: err.message || 'Unknown error' };
    }
  },
};
