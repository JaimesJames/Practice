package main

import (
	"fmt"
	"strings"
)

func main(){
	const name string = "JaimesJames"
	age := 25
	var score float32 = 98.4
	var input string
	array := [3]int{100, 100, 100}
	maping := map[string]string{"TH":"Thailand", "UK":"United Kingdom"}
	fmt.Printf("Name : %v\n%T\n",name, name)
	fmt.Println("age :", age)
	fmt.Println("Country:", maping["TH"])
	fmt.Printf("score : %.2f/%d\n", score, array[0])
	if score>50 {
		fmt.Println("Status : pass")
	}else {
		fmt.Println("Status : fail")
	}
	fmt.Scanf("%s",&input)
	if strings.ToLower(input)=="yes" {
		fmt.Println("good ja")
	}else if strings.ToLower(input)=="no"{
		fmt.Println("Pathetic")
	}else{
		fmt.Println("are you stupid la?")
	}
}