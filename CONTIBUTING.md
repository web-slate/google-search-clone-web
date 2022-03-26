## Contributing

Welcome to Google Search Clone Web Contribution Docs. Below are the guidelines. Happy Coding !

### Commit Message Format
Each commit message consists of a simple pattern.  Below is the
format that includes a **type**, a **scope**, and a **subject** and every Pull Request's commit should be squashed.

```
<type>(<scope>): <subject or your message>
```

## Commit Message Guidelines
Guidelines gives precise rules over how our git commit messages can be formatted.  This leads to **more
readable messages** that are easy to follow when looking through the **project history**.  But also,
we use the git commit messages to **generate the App change log**.

### Revert
If the commit reverts a previous commit, it should begin with `revert(<scope>): Your Message `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Type
Must be one of the following:

* **build**: Changes that affect the build system or external dependencies (example scopes: maven, gradle)
* **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Netlify)
* **docs**: Documentation only changes like Swagger Annotations
* **feat**: A new feature
* **fix**: A bug fix
* **perf**: A code change that improves performance
* **refactor**: A code change that neither fixes a bug nor adds a feature
* **tech**: Any Technical Activities like clean up.
* **test**: Adding missing tests or correcting existing tests

### Scope
The scope should be the name of the modules / directory affected (as perceived by the person reading the changelog generated from commit messages).

The following is the list of supported scopes:

* **common** - In General Changes
* **component/<componentName>** - Component Changes
* **hooks/<customHookName>** - Custom Hook Changes
* **utils/<util-names>** - Utils Changes
* **constants/<constantNames>** - Constants Changes

### Examples
* tech(component/base): add header component 
* tech(hooks/base): add list employee service
* tech(utils/base): add endpoint utils
* tech(utils/base): add route-path
* fix(user): update JwtUtil