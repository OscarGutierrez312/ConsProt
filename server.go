package main

import (
	"fmt"
	"net/http"
	"log"
)

func main() {
	http.HandleFunc("/", server)
	if err := http.ListenAndServe(":8080", nil);err != nil {
		log.Fatal(err)
	}
	
}

func server(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hola Mundo ", r.URL.Path[1:])
}
