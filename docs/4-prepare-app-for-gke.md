# Prepare app for GKE

## Configure docker to use gcloud as credential helper

```bash
gcloud auth configure-docker
```

## Tag images for GCR

```bash
docker tag book-service gcr.io/book-service-468011/book-service:v1
docker tag author-service gcr.io/book-service-468011/author-service:v1
docker tag rating-service gcr.io/book-service-468011/rating-service:v1
```
