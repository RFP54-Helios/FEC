# FEC

Front End Capstone repository for RFP54's Team Helios!

## Git Workflow

### General Rules

- Never work directly on the `master` branch
- Create a branch for each new feature
- Handle merge conflicts on local clone in VS Code
- Pull requests must be reviewed by another team member before closing

### Creating a new Feature Branch

1. Clone from [organization repo](https://github.com/RFP54-Helios/FEC)

    ```bash
    git clone https://github.com/RFP54-Helios/FEC
    ```

1. Make sure you are on branch `master`
1. Create a branch with a name descriptive of the feature you are developing

    ```bash
    git checkout master
    git checkout -b feature-name
    # alternative
    git checkout -b <feature-name> master
    ```

1. Make changes, commit frequently

### Syncing changes with `master`

Avoid conflicts in PR

1. Switch to branch `master`
1. Pull changes made to master by others
1. Handle any merge conflicts in VS Code
1. Switch to `feature-branch`
1. Merge changes from `master` -> `feature-branch`
1. Push up to GitHub `feature-branch`

    ```bash
    git checkout master
    git pull
    # handle merge conflicts
    git checkout feature-branch
    git merge master
    git push origin feature-branch
    ```

### Adding Features from Branches to `master`

1. Submit Pull Request
    1. base:master <- feature-name
    1. reference Trello ticket with link
1. Code Review
1. 
