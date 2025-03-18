package main

import (
	"fmt"

	"example.com/greetings"
)

func main() {
	message := greetings.Hello("Bae")
	fmt.Println(message)
}