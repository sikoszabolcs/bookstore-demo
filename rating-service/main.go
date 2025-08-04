package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Rating struct {
	ID    int     `json:"id"`
	Score float64 `json:"score"`
}

func getRatings(w http.ResponseWriter, r *http.Request) {
	ratings := []Rating{
		{ID: 1, Score: 4.5},
		{ID: 2, Score: 4.8},
		{ID: 3, Score: 4.2},
	}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(ratings)
}

func main() {
	http.HandleFunc("/ratings", getRatings)
	log.Println("Rating service starting on: 3000")
	log.Fatal(http.ListenAndServe(":3000", nil))
}
