export function throttle<T extends (...args: any[]) => any>(func: T, delay: number): T {
  let lastCall = 0;
  return function (this: ThisParameterType<T>, ...args: Parameters<T>): ReturnType<T> | void {
    const now = new Date().getTime();
    if (now - lastCall >= delay) {
      lastCall = now;
      return func.apply(this, args);
    }
  } as T;
}
