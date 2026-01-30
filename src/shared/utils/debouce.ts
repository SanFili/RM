export function debounce(callee, timeoutMs) {
  let lastCallTimer = null;

  return function (...args) {
    if (lastCallTimer) {
      clearTimeout(lastCallTimer);
    }

    lastCallTimer = setTimeout(() => {
      callee(...args);
    }, timeoutMs);
  };
}
