# Translate API

![Typescript](https://img.shields.io/badge/-Typescript-1572B6?style=flat-square&logo=typescript&logoColor=white "Typescript")
![Python](https://img.shields.io/badge/-Python-2b5b84?style=flat-square&logo=Python&logoColor=white "Python")
![Nodejs](https://img.shields.io/badge/-Nodejs-339933?style=flat-square&logo=Node.js&logoColor=white "Node.js")
![Express](https://img.shields.io/badge/-Express-339933?style=flat-square&logo=Express&logoColor=white "Express")

Project to learn about integrate `NodeJs` and `Python`.

This a simple API to translate texts using `Python` library: `googletrans`.

## Setup

First you need to have already installed `Python` and installed the library with (_Use this `pip install`, because in newer versions have some issues and bugs_).

```
pip install googletrans==3.1.0a0
```

After that, let's install `Node` dependencies, with `Yarn`.

```
yarn
```

And convert the `Typescript` aplication, to `Javascript` aplication using:

```
yarn build
```

Now, we need to create a new file in the `root` of project folder, name as `.env`.
Inside we just need to put the port to server run.

```
PORT=3333
```

## Run server

After `Setup`, let's run server.

```
yarn start
```

## How it works?

When we run in `localhost`, we can access translate function in

`http://localhost:<PORT>/api/translate`.

We need to do a method `POST`, sending 3 params in body (JSON format) `text`, `translateFrom`, `translateTo`.

| Key             | Type   | Description                      |
| --------------- | ------ | -------------------------------- |
| `text`          | string | The text you wanna translate     |
| `translateFrom` | string | The language was put in `text`   |
| `translateTo`   | string | The language you wanna translate |

**Response**

```json
{
    "translatedText": "something"
}
```

---

_by Matheus Ishiyama_
