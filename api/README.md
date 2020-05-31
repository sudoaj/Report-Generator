#REPORT GENERATOR DJANGO API

Api Root
GET /api/
HTTP 200 OK
Allow: GET, HEAD, OPTIONS
Content-Type: application/json
Vary: Accept

{
    "/": "http://127.0.0.1:8000/api/users/",
    "users": "http://127.0.0.1:8000/api/users/",
    "reports": "http://127.0.0.1:8000/api/reports/",
    "timeslot": "http://127.0.0.1:8000/api/timeslot/"
}

~More Will be Added~