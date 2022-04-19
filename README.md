# 💁‍♂️sitell
下記のリンクにて実際のサービスを閲覧できます。↓
https://sitell.me/

<img width="1438" alt="スクリーンショット 2022-04-19 20 14 52" src="https://user-images.githubusercontent.com/42470564/163992311-ea7ca17a-6663-4b41-bac5-563de46360ed.png">

<img width="295" alt="スクリーンショット 2022-04-19 20 14 30" src="https://user-images.githubusercontent.com/42470564/163992275-e9baa314-b578-4d3b-9d50-8a9b5ff612c6.png">

<img width="299" alt="スクリーンショット 2022-04-19 20 14 09" src="https://user-images.githubusercontent.com/42470564/163992246-6d537263-369b-41d9-a6ce-c9df199363a3.png">

# このリポジトリについて
論文要約サービスのsitellを管理するリポジトリになります。
論文を読み慣れていない人にもその内容をわかりやすく伝えることでもっと1次情報にアクセスすることができます。

# 🧑‍💻開発
## 使用技術
<div style="display: flex;">
<img src="https://user-images.githubusercontent.com/42470564/163999794-cf942a5e-fbb2-481f-b9e0-8b45c3d53a50.svg" width="80px;" style="padding: 20px;" />
<img src="https://user-images.githubusercontent.com/42470564/164000431-61862191-21d6-4cd2-8757-cda55c62289c.svg" height="80px;" style="padding: 20px;" />
<img src="https://user-images.githubusercontent.com/42470564/164000864-0f9e0a43-d1d0-4cee-baac-49e7bcdac9b9.png" height="80px;" style="padding: 20px;" />
<img src="https://user-images.githubusercontent.com/42470564/164001403-caf4466b-93d3-4e93-871d-8d7e5d88a16c.svg" height="80px;" style="padding: 20px;" />
</div>

## ローカル環境構築手順
### git clone
このsitellのdocker環境を管理するリポジトリをcloneし、その配下にこのリポジトリをcloneしてください。

```
$ git clone git@github.com:centerRyo/sitell-docker.git
$ cd sitell-docker/
$ git clone git@github.com:centerRyo/sitell.git
```

### docker-compose up -d

```
$ cd sitell/
$ docker-compose up -d
```

### composer install

```
$ docker-compose exec app bash
$ composer install
```

### .env作成
.env.exampleをコピーして.envを作成し、以下の値に変更する

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=db
DB_DATABASE=sitell
DB_USERNAME=root
DB_PASSWORD=root
```

### app key作成

```
$ php artisan key:generate
```

### DBマイグレーション

```
$ php artisan migrate
```

### アクセス

http://localhost にアクセスする
