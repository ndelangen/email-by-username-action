# email-by-username-action

GitHub Actions Plugin to get a GitHub user's email based on their username

## Usage

Takes in a username & [Github personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) as an input.

## Example

```yml
name: Test Get Email from Github Username
on:
  workflow_dispatch:

jobs:
  get_user_email:
    runs-on: ubuntu-latest
    name: A job to get a users email
    steps:
      - name: get email
        id: test
        uses: ndelangen/email-by-username-action@main
        with:
          github-username: 'ndelangen'
          token: 'token'

      # Use the output from the `test` step
      - name: Print the found email
        run: echo "The email is ${{ steps.test.outputs.email }}"
```
