# Deploy to GKE

## Apply the deployment

```bash
kubectl apply -f gke-deployment.yaml
```

## Watch the deployment progress

```bash
kubectl get pods -w
```

## Check services

```bash
kubectl get services
```

## Wait for the LoadBalancer to get an external IP

```bash
kubectl get services --watch
```
