# Smartify

## Description

**Django** backend for an **UpReach bootcamp** learning-platform exercise: courses, lessons, members, questions, and related **MySQL**-backed models. A **static HTML/CSS/JS** prototype lives in `smartify-interface/` (preview separately or integrate later).

## Prerequisites

- **Python 3.12** (see `Pipfile`)
- **Pipenv** (`pip install pipenv` or OS package)
- **MySQL 8** for the full LMS schema (optional: SQLite-only for partial Django dev — see below)
- On Linux, build deps for **`mysqlclient`**, e.g.  
  `sudo apt install default-libmysqlclient-dev pkg-config build-essential`

## Installation

From the repository root:

```bash
pipenv install
```

### MySQL database

Create a database named `smartify` (or match the name in `smartify/settings.py`).

App models under `database/` use **`managed = False`** — Django migrations do **not** create those tables. Load schema and demo data:

```bash
mysql -u root -p smartify < database/schema.sql
```

Demo login for `/login/`: **username** `test`, **password** `test` (see `schema.sql`).

### SQLite-only (limited)

```bash
export SMARTIFY_USE_SQLITE=1
pipenv run python manage.py migrate
```

Only Django’s own apps get tables; LMS tables remain oriented toward MySQL if you rely on raw SQL.

## Usage

```bash
pipenv run python manage.py runserver
```

| URL | Purpose |
|-----|---------|
| http://127.0.0.1:8000/ | App |
| http://127.0.0.1:8000/admin/ | Django admin |
| http://127.0.0.1:8000/__debug__/ | Debug Toolbar (if enabled) |

### Static UI only (`smartify-interface/`)

```bash
cd smartify-interface
python3 -m http.server 8080
```

Open http://127.0.0.1:8080/ — static files only, **not** Django.

## Project structure

| Path | Role |
|------|------|
| `smartify/` | Django settings, URLs |
| `pages/` | Views and templates |
| `database/` | ORM models (`managed = False`), `schema.sql` |
| `app/` | Placeholder app |
| `smartify-interface/` | Static frontend prototype |

## Configuration

- Adjust MySQL `USER` / `PASSWORD` / `HOST` / `NAME` in `smartify/settings.py` for your machine.
- Sample code may use raw SQL for teaching; do not deploy as-is to production.

## Stack

- **Backend:** Django, Python 3.12  
- **Database:** MySQL (primary), optional SQLite for dev  
- **Frontend prototype:** HTML, CSS, JS in `smartify-interface/`
