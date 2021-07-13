(async () => {
  console.log(`[Worker A] Running`);

  let sentence: string = '';

  for (let i = 0; i < 128; ++i) {
    for (let j = 0; j < 100000; ++j) {
      sentence += 'a';
    }
    console.log(`Iteration ${i + 1} / ${(process.memoryUsage().heapUsed / (1024 * 1024)).toFixed(2)} MB`);
    await new Promise(resolve => { setTimeout(resolve, 10); });
  }
})();
