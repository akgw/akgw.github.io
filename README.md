# akgw.github.io

自己紹介ページ。https://akgw.github.io/

- [Astro](https://astro.build/) の静的サイト。載せる情報は `src/data/profile.ts` に集約している
- `main` への push で GitHub Actions がビルドし GitHub Pages にデプロイする

## 開発

```sh
pnpm install
pnpm dev      # http://localhost:4321
pnpm build    # 型チェック + dist/ に出力
```
