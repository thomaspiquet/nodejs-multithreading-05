# NodeJS Multithreading 05

Resource Allocation

### Environment :
```
NodeJS minimal version: v12.x.x LTS (Erbium)
NodeJS recommended version: Latest LTS version
Dev Language: TypeScript (ES6)
Run Language: JavaScript
```
See [Latest NodeJS LTS version](https://nodejs.org/)

### How to run

#### First

Install packages

```
npm run i
```

#### Then

To run in Development
```
npm run start:dev
```

To run in Production
```
npm run start
```

## Explanations


It is possible to restrain your worker from using too much resources.

For example, you can limit memory allocation by using maxOldGenerationSizeMb.


### Main Thread Side

```ts
const myWorker: Worker = new Worker(
  process.env.NODE_ENV === 'production' ? './myWorker.js' : './src/proxy.js',
  {
    resourceLimits: {
      maxOldGenerationSizeMb: 256,
    }
  }
);
```

If your thread exceed 256 MB, it will be automatically terminated.

## Next Chapter

Multithreading 06 - Kill Thread
https://github.com/thomaspiquet/nodejs-multithreading-06