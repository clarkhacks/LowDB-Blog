LowDB Blog
===========
<!-- Remix Button -->
<a href="https://glitch.com/edit/#!/remix/lowdb-blog">
  <img src="https://cdn.glitch.com/2bdfb3f8-05ef-4035-a06e-2043962a3a13%2Fremix%402x.png?1513093958726" alt="remix button" aria-label="remix" height="33">
</a>

LowDB Blog is a LowDB (ya don't say?) and jQuery powered blog with a full private and public API. This repository is updated frequently.


# Setup

1. Run `npm install`
2. Set a secret in `secret.example.json`. Make it complicated, like a hard password, _(ex: 48zu-QdF5a-dS)_ with URL friendly characters.
3. Rename `secret.example.json` to "secret.json". (In production use environmental variables)
4. Set Meta data and Posts via the API or `db.json` (In production store data in `.data/db.json`)
5. Run `node server.js`

# API

The API is relatively simple to understand and use. It is based around post requests and your `.env` secret you set earlier. Examples are shown in jQuery.

## New Post

__End Point_ `/posts/new`

__Parameters__ `title`,`date`,`body`, and `token`.

__Example__ `$.post("/posts/new", { title: "Title", date: "Month Day, body: "Lorem ipsum...", token: "TOKENHERE"});`

All queries are required.

## Meta Data

__End Point__ `/meta/:ID`

__IDs__`user`,`bio`,`link`,`photo`, `photo`, and `title`.

__Parameters__  `value`, `text`, and `token`.

__Example__ `$.post("/meta/bio", { value: "Lorem ipsum...", token: "TOKENHERE"});`

__Example 2__ `$.post("/meta/link", { text: "Google", value: "google.com", token: "TOKENHERE"});`

All queries are required expres text. Text is used only for the `link` ID.

## Public API

The public API is a read only version of the LowDB json file.

 __End Point__ `/api/v1`
