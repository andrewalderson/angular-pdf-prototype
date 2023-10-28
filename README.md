# Angular PDF Prototype

This repository is an exploration for creating a PDF Reader and Writer in TypeScript using Angular.

**_None of this code should be considered production ready_**

I am creating a PDF library becuase I have experience doing this (I created a PDF Reader in ActionScript in 2010) and there are a lot of examples available on GitHub. I am hoping that I can turn this into a general document rendering and editing library. I am using Angular because that is what I do and one of the goals is to explore what the boundries of Angualr are in the code. A lot of the code will be pure JavaScript but I can see Angular Signals and/or RxJS being useful in some places. I also think that some of the code may be better in WebAssembly and I will probably investigate that in a seperate project. This code being JavaScript (TypeScript) can serve as a baseline for performance.

### Goals

> _I will fill this in as a I go along_

- Explore code structure and library boundries
- Explore Web APIs
  - Workers
  - SharedArrayBuffer
  - Atomics
  - CSSStyleDeclaration (used to load fonts embedded in pdf file)
  - more...
- Explore using Angular concepts and what the boundries of those should be
