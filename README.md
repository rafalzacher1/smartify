# Smartify

Django backend for an **UpReach bootcamp** learning-platform exercise: courses, lessons, members, questions, and related MySQL-backed models. A **static HTML/CSS/JS** UI prototype lives under `smartify-interface/` (served separately or integrated later).

## Requirements

- **Python 3.12** (see `Pipfile`)
- **Pipenv** (`pip install pipenv` or your OS package)
- **MySQL 8** (optional if you use SQLite for local dev)
- **Build deps for `mysqlclient`** on Linux, e.g.  
  `sudo apt install default-libmysqlclient-dev pkg-config build-essential`

## Setup

From the repository root:

```bash
pipenv install
```

Create a MySQL database named `smartify` if you use MySQL (user/password/host match `smartify/settings.py` or change them there).

### LMS tables (MySQL)

App models under `database/` use **`managed = False`** — Django migrations do **not** create those tables. For a full schema plus demo data:

```bash
mysql -u root -p smartify < database/schema.sql
```

Demo login for `/login/`: **username** `test`, **password** `test` (see seed in `schema.sql`).

### SQLite (no MySQL)

```bash
export SMARTIFY_USE_SQLITE=1
pipenv run python manage.py migrate
```

Only Django’s built-in apps get tables; the LMS tables above are still MySQL-oriented if you use raw SQL against `members`, etc.

## Run the dev server

```bash
pipenv run python manage.py runserver
```

- App: **http://127.0.0.1:8000/**
- Admin: **http://127.0.0.1:8000/admin/**
- Django Debug Toolbar: **http://127.0.0.1:8000/__debug__/**

## Project layout

| Path | Role |
|------|------|
| `smartify/` | Django project settings, URLs |
| `pages/` | Views and templates for the thin web UI |
| `database/` | ORM models mapping existing MySQL tables (`managed = False`), `schema.sql` |
| `app/` | Placeholder app |
| `smartify-interface/` | Static frontend prototype (`index.html`, styles, scripts) |

### Preview `smartify-interface` only

From `smartify-interface/`:

```bash
python3 -m http.server 8080
```

Open **http://127.0.0.1:8080/** — this does not run Django; it is for static files only.

## Configuration notes

- **Database:** Default MySQL settings use `HOST` **127.0.0.1** (TCP). Adjust `USER` / `PASSWORD` / `NAME` in `smartify/settings.py` for your environment.
- **Security:** Sample code uses **raw SQL** in places (e.g. login) for teaching; do not use as-is in production.

## License / origin

Course project material; use and deployment are your responsibility.
