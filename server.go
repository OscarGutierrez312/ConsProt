package main

import (
	"fmt"
	"net/http"
	"log"
)

func main() {
	fileServer := http.FileServer(http.Dir("./static"))
	http.Handle("/", fileServer)
	http.HandleFunc("/form", formHandler)
	http.HandleFunc("/home", server)
	if err := http.ListenAndServe(":8080", nil);err != nil {
		log.Fatal(err)
	}
	
}

func server(w http.ResponseWriter, r *http.Request) {
	fmt.Fprint(w, "Hola Mundo ", r.URL.Path[1:])
}

func formHandler(w http.ResponseWriter, r *http.Request){
	if err := r.ParseForm();err != nil{
		fmt.Fprint(w, "ParseForm() err: ", err)
		return
	}
	fmt.Fprintf(w, "POST request successful \n")
	name := r.FormValue("name")
	address := r.FormValue("address")

	fmt.Fprintf(w, "Name = %s\n", name)
	fmt.Fprintf(w, "Address = %s\n", address)
}