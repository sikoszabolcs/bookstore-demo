#!/bin/bash

echo "=== Testing Load Balancing ==="
echo "This script will make multiple requests and show which pods handle them"
echo "Press Ctrl+C to stop"
echo ""

# Function to make requests and show pod info
test_load_balancing() {
    for i in {1..20}; do
        echo "Request #$i:"
        response=$(curl -s http://localhost/books)
        
        # Extract pod name from response
        pod_name=$(echo $response | grep -o '"podName":"[^"]*"' | cut -d'"' -f4)
        timestamp=$(echo $response | grep -o '"timestamp":"[^"]*"' | cut -d'"' -f4)
        
        echo "  Served by pod: $pod_name"
        echo "  Timestamp: $timestamp"
        echo ""
        
        sleep 1
    done
}

# Check if service is available
echo "Checking if bookstore-frontend service is available..."
kubectl get service bookstore-frontend

echo ""
echo "Making test requests..."
echo ""

# Make requests
test_load_balancing

echo "=== Load Balancing Test Complete ==="
echo "You should see different pod names in the responses, proving load balancing works!"