function cachingDecoratorNew(func) {
  const cache = new Map();

  return function(...args) {
    const key = JSON.stringify(args);

    if (cache.has(key)) {
      return "Из кеша: " + cache.get(key);
    }

    const result = func(...args);

    if (cache.size >= 5) {
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }

    cache.set(key, result);

    return "Вычисляем: " + result;
  };
}

function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  let isFirstCall = true;

  function wrapper(...args) {
    wrapper.allCount++;

    if (isFirstCall) {
      func.apply(this, args);
      wrapper.count++;
      isFirstCall = false;
      return;
    }

    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(this, args);
      wrapper.count++;
    }, delay);
  }

  wrapper.count = 0;
  wrapper.allCount = 0;

  return wrapper;
}