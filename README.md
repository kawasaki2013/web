# [Game Users](https://gameusers.org/)
![Game Users Banner](https://gameusers.org/assets/img/social/ogp_image.jpg)


[![PHP](https://img.shields.io/badge/PHP-v7.1-red.svg)](http://php.net/manual/ja/langref.php)
[![FuelPHP](https://img.shields.io/badge/FuelPHP-v1.8.0-AC58FA.svg)](https://fuelphp.com/)
[![Apache](https://img.shields.io/badge/Apache-v2.4-green.svg)](https://httpd.apache.org/)
[![MySQL / MariaDB](https://img.shields.io/badge/MySQL%20%2F%20MariaDB-v5.4%20%2F%20v10.1-5882FA.svg)](https://mariadb.org/)
[![node](https://img.shields.io/badge/node-v8.5.0-lightgrey.svg)](https://nodejs.org/ja/)
[![npm](https://img.shields.io/badge/npm-v5.0.4-blue.svg)](https://www.npmjs.com/)
[![David](https://img.shields.io/david/expressjs/express.svg)]()
[![license](https://img.shields.io/badge/license-Game%20Users%20Project-blue.svg)](https://github.com/gameusers/web/blob/master/LICENSE.txt)

ゲームユーザーズはゲームユーザーのためのコミュニティサイトです。現在、開発者を広く募集しています。初心者でもWebを触ったことのないプログラマーでもOK！ゲーム関係でこういう機能があったらいいのにな、というアイデアがあれば、ぜひこの場所を使って実装してください。

ゲームを好きな開発者がなんでも作れる砂場のような場所にしたい！

## 現在更新している内容 2017/10/08
Game UsersをReactで書き直しています。React化するに当たってファイルをひとところにまとめようと思い、reactというディレクトリー内に必要なファイルを集めています。現在はサイトを構成するファイルがあちこちに散在しているのですが、これからは以下のファイル、ディレクトリーだけで動作するようにしたいです。

#### PHP部分
- [fuel/app/classes/controller/app.php](https://github.com/gameusers/web/blob/master/fuel/app/classes/controller/app.php)（アプリケーションページのコントローラー）
- [fuel/app/classes/controller/api.php](https://github.com/gameusers/web/blob/master/fuel/app/classes/controller/api.php)（Rest API）
- [fuel/app/classes/react/](https://github.com/gameusers/web/tree/master/fuel/app/classes/react)（React関連ディレクトリー）

#### Javascript / CSS / Image / ライブラリー部分
- [public/react/](https://github.com/gameusers/web/tree/master/public/react)（React関連ディレクトリー）

#### 編集中のページ
現在、オリジナルのシェアボタン（ソーシャルボタン）を作成しており、そのシェアボタンの公式ページをGame Users内のアプリケーションページ（関連アプリを紹介するページ）に設置しようと考えています。ゲームには直接関係のないコンテンツなのですが、せっかくなのでみなさんに使ってもらえるようにしようと思っています。

https://localhost/gameusers/public/app/share-buttons

※ シェアボタン部分のコードはライセンスがGPLのため、このリポジトリに含めて公開することができません（ライセンス汚染が発生するため）現在は上記URLにアクセスしてもファイルが足りないため、エラーが起こります。完成したら別リポジトリで公開する予定で、そのファイルを特定の場所に設置することで動作するようになります。ややこしくて申し訳ありません。

## 必要な開発環境

PHP 7.1以上  
Apache 2.4以上  
MySQL 5.4以上 または MariaDB 10.1以上

PHPは7以上でないと正常に動作しません。Windows版のXAMPPで開発していますので、開発環境を簡単に用意したい場合は、XAMPPのPHP7バージョンをインストールしてもらえば同じように動作すると思います。

[XAMPP](https://www.apachefriends.org/jp/index.html)

## インストール

トップページが以下のアドレスでアクセスできる場所に、Clone（ダウンロード）したファイルを配置してください。例）CドライブにXAMPPをインストールした場合は、C:\xampp\htdocs\gameusers 以下にファイルを置くと正常に表示されます。

https://localhost/gameusers/public/

### パッケージのインストール

	npm install

cdコマンドでgameusersディレクトリに移動してから、上記コマンドを入力してパッケージをインストールしてください。Node.jsやnpmについてブログで解説していますので、わからない方はこちらを参考にしてみてください。

- [Node.jsをイントールしよう！](https://gameusers.org/dev/blog/environment/node-js-install)
- [npmの基本的な使い方](https://gameusers.org/dev/blog/environment/npm-tutorial)

2017/9/16 現在、パッケージ関連で把握している問題
- [React関連パッケージのバージョンによって起こる問題](https://gameusers.org/dev/blog/notes/20170916-1)

### php.iniの変更（XAMPPの場合 C:\xampp\php\php.ini）

;extension=php_fileinfo.dll  
↓  
extension=php_fileinfo.dll

;extension=php_gmp.dll  
↓  
extension=php_gmp.dll

### データベースの作成

一番上の階層に create_gameusers.sql というSQLファイルがあります。これをデータベースにimportしてもらえば、gameusersというデータベースが作成されます。

### データベースへのアクセス

fuel/app/config/db.phpを開いて、データベースのユーザー名、データベースのパスワード部分に開発環境のデータベースの情報を入力して保存してください。

	return array(
		'default' => array(
			'connection'  => array(
				'dsn'        => 'mysql:dbname=gameusers; host=127.0.0.1',
				'username'   => 'データベースのユーザー名',
				'password'   => 'データベースのパスワード',
			),
			'charset' => 'utf8',
			'profiling' => true,
		),
	);

## アカウントについて

データベースをimportすると、予めアカウントが3つ用意されています。以下の情報でログインできますので、機能をテストしたい場合などに利用してください。
- 管理者アカウント / ログインID admin / パスワード 0123456a
- ユーザーアカウント / ログインID user2 / パスワード 0123456a
- ユーザーアカウント / ログインID user3 / パスワード 0123456a

## 動作しない機能

SNSのConsumer KeyやAccess Tokenなどは公開できないため、それを利用している機能は動作しません。

- TwitterやGoogleなどのアカウントを利用してのログイン
- 掲示板に書き込んだ際にTweetする
- WebPush機能
- お問い合わせの送信

## インストールについて

GitHubの知識があまりなく、プロジェクトを公開するのも初めてなため、解説している方法で問題なく環境が構築できるのかわかりません。XAMPPについて言及していたり、もしかすると非常にバカバカしい構成になっているかもしれませんが、高スキルなプログラマーではないため、生暖かい目で見ていただけるとありがたいです。

## ライセンス

Game Users プロジェクトに帰属します。

独自のWebサイトの開発って、どういうライセンスでやるのが普通なんだろう？量産されるようなものではないため、オープンなライセンスにする意味がないと思うんですが、公開されてるリポジトリでクローズドなライセンスってなんか変ですね。

## 開発情報

開発についての情報をブログにまとめていきます。React & Node.jsで開発していくので、参考になる情報も掲載していきたいです。

[Game Users 開発ノート](https://gameusers.org/dev/blog/)
