# References

https://github.com/Lruihao/hugo-blog

### NPM

```bash
npm install
# build the blog
npm run build
# run a local debugging server with watch
npm run server
# run a local debugging server in production environment
npm run server:production
# update theme submodules
npm run update:theme
```

### Hugo

```bash
# Development environment
hugo server --disableFastRender --navigateToChanged --bind 0.0.0.0
# Production environment
hugo server --disableFastRender --navigateToChanged --environment production --bind 0.0.0.0
```

<details>
<summary>Admin。</summary>

```bash
cd .shell && sh hugo_main.sh
```

```text
--------------Hugo Admin--------------
Please enter the serial number to work
--------------------------------------
1. post
2. server
3. server:production
4. build
5. submodule-sync
6. push
--------------------------------------
Press Ctrl+C to stop
```

</details>