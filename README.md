# unplugin-vue-components demo 657

[issue](https://github.com/antfu/unplugin-vue-components/issues/657)

Run:

```bash
$ pnpm dev
```

In VSCode:
- ✅ `<AButton>` is known (auto-imported from arco-design by unplugin)
- ❌ `<MyComponent>` is unknown (auto-imported by nuxt, but...)

If I disable `unplugin-vue-components`:
- ✅ `<MyComponent>` is known (auto-imported by nuxt)
- ❌ `<AButton>` is unknown (auto-imported by unplugin, but...)
