# CoopVPN (Hugo)

Standalone Hugo site (no Tailwind) with:
- Blog at `/blog/`
- i18n with language switcher in header
- Clean, commented CSS that matches the `new-provider` layout/style

## Run locally

```bash
hugo server -D
```

## Add a blog post

```bash
hugo new blog/my-post.md
```

## Github Pages:

steps.pages.outputs.base_url is automatically the correct GitHub Pages URL for whoever forked/cloned the repo — it's generic by nature. So you get:

Any GitHub Pages deploy → auto-detected URL (e.g. https://somefork.github.io/CoopVPN/)

Main branch → uses vars.PRODUCTION_URL repo variable (e.g. https://coopvpn.net)

Set the repo variable (each deployer does this once in their own repo):

``Repo → Settings → Secrets and variables → Actions → Variables tab → New: PRODUCTION_URL
= https://coopvpn.net``

## Local dev and testing

You could install hugo locally, but this might be easier:

```
docker run --rm -it -p 1313:1313 --user $(id -u):$(id -g) -v $PWD:/coopvpn -w /coopvpn floryn90/hugo:ext-asciidoctor  
```

You can look live at any changes in http://localhost:1313/

## Build && Deply

First build, then rsync:
```
docker run --rm -it -p 1313:1313 --user $(id -u):$(id -g) -v $PWD:/coopvpn -w /coopvpn floryn90/hugo:ext-asciidoctor build --environment production
```

Rsync is the magic tool for this, /var/www/html/
