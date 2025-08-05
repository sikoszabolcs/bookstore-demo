# Enable monitoring

```bash
# GKE has built-in Cloud Monitoring integration
# Enable it for your cluster
gcloud container clusters update bookstore-cluster \
    --zone=us-central1-a \
    --enable-cloud-logging \
    --enable-cloud-monitoring

# Or if creating a new cluster:
gcloud container clusters create bookstore-cluster \
    --zone=us-central1-a \
    --num-nodes=3 \
    --enable-cloud-logging \
    --enable-cloud-monitoring
```
