#!/bin/bash

echo "=== Continuous Load Balancing Test ==="
echo "Making requests every 0.5 seconds. Press Ctrl+C to stop."
echo ""

# Counter for requests
counter=1

while true; do
    response=$(curl -s http://localhost/books)
    pod_name=$(echo $response | grep -o '"podName":"[^"]*"' | cut -d'"' -f4)
    
    echo "Request $counter: Served by pod $pod_name"
    
    counter=$((counter + 1))
    sleep 0.5
done