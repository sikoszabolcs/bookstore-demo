# Cleanup

```bash
kubectl delete -f gke-deployment.yaml

gcloud container clusters delete bookstore-cluster --zone=us-central1-a

gcloud container images delete gcr.io/book-service-468011/book-service:v1
gcloud container images delete gcr.io/book-service-468011/author-service:v1
gcloud container images delete gcr.io/book-service-468011/rating-service:v1
```
