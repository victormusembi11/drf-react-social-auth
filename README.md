# DRF React Social Auth

social auth docs - [https://drf-social-oauth2.readthedocs.io/en/latest/index.html]

yt video - <https://www.youtube.com/watch?v=wlcCvzOLL8w>

## Setup

### Backend

```bash
python3 -m venv venv
```

```bash
source venv/bin/activate
```

create a .env file in the root directory and add the content in .env.example file to it

```bash
pip install -r requirements.txt
```

```bash
python manage.py migrate
```

```bash
python manage.py runserver
```

### Frontend

```bash
cd frontend
```

```bash
npm install
```

```bash
npm start
```
