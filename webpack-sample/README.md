# webpack-sample

typescript + webpack

## 環境構築

- 初期化

```
$ npm init -y
```

- バンドル用のパッケージインストール

```
$ npm install --save-dev webpack webpack-cli typescript ts-loader
```

- トランスパイル用のパッケージインストール

```
$ npm install --save-dev @babel/core @babel/preset-env
```

- typescript のトランスパイル用のパッケージインストール

```
$ npm install --save-dev @babel/preset-typescript
```

- babel-loader のパッケージインストール（ts-loader を使わなくなるので削除）

```
$ babel-loader
```

- TypeScript ESLint のパッケージインストール

```
$ npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- Prettier と TypeScript ESLint のパッケージインストール

```
$ npm install --save-dev prettier eslint-plugin-prettier eslint-config-prettier
```
