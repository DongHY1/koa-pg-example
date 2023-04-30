# My Starter 
## Feature
- 🌟 **Language**: Strong typing and code completion with TypeScript.

- 📦 **Package Manager**: Fast installation and space efficient with pnpm.

- 🔍 **Testing Framework**: Simple, efficient, and scalable testing with vitest.

- 🎁 **Bundling**: Tree-shaking to reduce output file size and improve performance with tsup.

- 👮 **Git**: Standardized commit message formats with cz-git.

- 🤖️ **CI/CD** npm workflow with github actions and changeset

## Setup
+ Insall Node.js >=v16 and pnpm.
+ `pnpm install`.
+  Wirte some code.
+  `git add .`
+  Use `pnpm cz` instead of git commit.
+  Done ✨

If you want publish this package, you can use changeset and github actions:
+ `pnpm changeset init`
+ `pnpm changeset`
+ add REPO_TOKEN and NPM_TOKEN env to your repo
    ```
    // in publish.yml
        GITHUB_TOKEN: ${{ secrets.REPO_TOKEN }}
        NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
    ```           
+ publish your branch
+ In your repo , you will receive github-actions merge request. if you agree merge , this npm package will publish!


## License
MIT License © 2023 Dong HY
