export function useI18n() {
  return {
    t: (key, fallback) => fallback || key
  };
}
