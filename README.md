# Roos

> _A rose by any other name would achieve 50,000 downloads per week_

Have you ever had a brilliant idea for an npm package, but discovered that the super cool amazing name you had in mind is already taken? And the next name you think of is also taken?? And the one after that???

Fear not! This extremely vital CLI tool will search the registry for you for up to 10 names at a time, or will find synonyms via the [Datamuse API](https://www.datamuse.com/api/) and search those too for up to three words at a time.

## Usage

```bash
npm i -g roos
```

To search just your own words:

```bash
roos books flamingo purple ketchup
```

will get you

```bash
books is already taken :(
flamingo is already taken :(
ketchup is already taken :(
purple is already taken :(
```

To search with synonyms:

```bash
roos books flamingo purple --synonyms (or -s)
```

will get you

```bash
purple is already taken :(
flamingo is already taken :(
books is already taken :(
script is already taken :(
colored is already taken :(
colorful is already taken :(
volume is already taken :(
flemish sounds like a good name!
purplish sounds like a good name!
embellished sounds like a good name!
record is already taken :(
flamenco sounds like a good name!
fleming is already taken :(
daybook is already taken :(
ledger is already taken :(
bird is already taken :(
pelican is already taken :(
violet is already taken :(
```
