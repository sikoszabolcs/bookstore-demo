# Configure kubectl with GKE

## Get credentials

```bash
gcloud container clusters get-credentials bookstore-cluster --zone=us-central1-a
```

## Verify if it's the right cluster

```bash
kubectl config current-context
```

### Check cluster info

```bash
kubectl cluster-info
````
