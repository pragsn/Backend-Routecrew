# RouteCrew Admin Dashboard

Separate web dashboard for authorized backend/operations staff to review driver registration details and submitted documents.

The expanded Phase-1 verification view follows the Cab Fleet Blueprint: vehicle and insurance checks, driver identity and home geo-tag, independent pickup/drop availability, external engagement capture, referral details, document decisions and audit history.

## Run locally

```bash
python3 -m http.server 5174 --directory dist
```

Open `http://localhost:5174`.

This frontend is intentionally separated from the driver application. The production connection will use authenticated backend APIs, PostgreSQL/PostGIS records, private S3-compatible document storage and short-lived signed document URLs.
