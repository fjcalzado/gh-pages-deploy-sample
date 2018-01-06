# gh-pages-deploy-sample

Lab project that will serve as playground to practice gh-pages deploy automation.


# Usage

The key part of this sample project is the set of scripts coded in `package.json` along its configuration variables:

#### Configuration
- `build`: Name of the folder containing the output files.
- `remote`: Name/alias of the remote repository in Github.
- `msg`: Message to be added on each deploy commit. 

#### Scripts
- `build`: Simple build script based on webpack.
- `clean`: Slightly modified `clean` script to support this functionality. Instead of just removing the build folder (typically `dist`), we must ensure that git related files (`.git`) are not deleted.
- `gh:reset`: It returns local and remote repositories to original state. It removes `gh-pages` on both.
- `gh:init`: Execute this script only once from a clean state. This initialization script will prepare the build folder (`dist` by default) as an independent worktree in the local repository. This advanced feature will allow us to commit changes in build folder to a completely different branch (called `gh-pages`) that does not share same origin as master.
- `gh:deploy`: Run this script whenever we want to update our deploy. It will automatically build the solution, deploy files into build folder, commit locally into `gh-pages` and push this commit to the remote.
