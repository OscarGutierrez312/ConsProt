package main

import (
	"fmt"
	"net/http"
	"log"
)

func main() {
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)
	http.HandleFunc("/home", server)
	if err := http.ListenAndServe(":8080", nil);err != nil {
		log.Fatal(err)
	}
	
}

func server(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hola Mundo ", r.URL.Path[1:])
}
