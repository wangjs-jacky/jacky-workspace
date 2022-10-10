export function delaySeconds(seconds: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, seconds);
  });
}
