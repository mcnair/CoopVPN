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

You want to build and deploy?

```
docker run --rm -p 1313:1313 --user $(id -u):$(id -g)  -v $(pwd):/src  coopvpn-builder build -e production --baseURL "https://coopvpn.net" 
rsync -av --info=PROGRESS2 public/ root@coopvpn.net:/var/www/html/
```
