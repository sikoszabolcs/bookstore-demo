# Set up GKE

## Authenticate with google cloud

```bash
gcloud auth login
```

## Set your project

```bash
gcloud config set project book-store-468011
```

## Enable required APIs

```bash
gcloud services enable container.googleapis.com
gcloud services enable containerregistry.googleapis.com
```
