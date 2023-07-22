# Commit convention

## How to create commits

In our project, we create commits in an orderly way, using emoji for this and start the commit content with a capital letter.
The commit body complements „this commit will...". For example: ":lipstick: Fix main container height"

## List of emojis that we use

| Emoji | Code          | Description                             | Name      |
| ----- | ------------- | --------------------------------------- | --------- |
| 🎨    | `:art:`       | Improve structure / format of the code. | art       |
| ⚡️   | `:zap:`       | Improve performance.                    | zap       |
| 🔥    | `:fire:`      | Remove code or files.                   | fire      |
| 🐛    | `:bug:`       | Fix a bug.                              | bug       |
| 🚑️   | `:ambulance:` | Critical hotfix.                        | ambulance |
| ✨    | `:sparkles:`  | Introduce new features.                 | sparkles  |
| 📝    | `:memo:`      | Add or update documentation.            | memo      |

...

See more https://gitmoji.dev/

## How to decide which emoji to use

In most cases, your change will fit into a pretty obvious emoji category. If it doesn't, you should think hard about whether or not you're making a clean change.

Often you can break up changes into two or more commits that each accomplish their own specific type of action. If that means you only change one tiny line or fix a simple typo in a commit, so be it! It should be a no-brainer that any given commit does exactly what it says it does — and only what is says it does. No side-effects.

In general, you should use exactly one emoji per commit message. In rare cases, you should use a second emoji (e.g. when using something like ⚡ to signify that whatever you just did — 🐛, 🔥, etc. — was a breaking change).

Emoji will also depend on your client/user. A back-end API might use ✨ when adding new API endpoints, and the front-end app might use ✨ when using those endpoints to display new content.

## The formula

### Human _WIP_

`:[EMOJI_NAME]: [THE COMMIT WILL...]`

- `:sparkles: Add cool animations`
- `:bug: Fix the flicker`

### RegEx

`[:]([A-Z a-z])\w+[:] [A-Z]\w.*$`
[RegEx example](regexr.com/5hrd4)

## Examples

- `🐛 Fix the flicker caused by the drawer`
- `✨ Add a super cool animation for the drawer`
- `♻️ Refactor drawer code`
- `🔥 Remove deprecated drawer code`
- `📦 Install react-littera@2.1.4`
