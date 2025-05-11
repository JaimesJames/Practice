package main

import (
	"database/sql"
	"fmt"
	"log"
	"strconv"

	// "strings"
	"github.com/gofiber/fiber/v2"

	_ "github.com/lib/pq"
)

const (
	host = "localhost"
	port = 5432
	databaseName = "mydatabase"
	username = "myuser"
	password = "mypassword"
)

var db *sql.DB

type Product struct{
	ID int `json:"id"`
	Name string `json:"name"`
	Describe string `json:"describe"`
	Price float64 `json:"price"`
}

type EditingProduct struct{
	ID int
	Name *string
	Describe *string
	Price *float64
}

func main() {
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable", host, port, username, password, databaseName)

	sdb, err := sql.Open("postgres", psqlInfo)

	if err != nil {
		log.Fatal(err)
	}

	db = sdb

	defer db.Close()

	err = db.Ping()

	if err != nil {
		log.Fatal(err)
	}

	print("Connection Database Successful\n")

	app := fiber.New()

	app.Get("/", func (c *fiber.Ctx) error {
		return c.SendString("Hello")
	})

	app.Get("/product/", getProductsHandler)
	app.Get("/product/:id", getProductHandler)
	app.Post("/product", createProductHandler)
	app.Put("/product/:id", updateProductHandler)
	app.Delete("/product/:id", deleteProductHandler)

	app.Listen(":8080")

	// err = createProduct(&Product{Name: "Small Candy", Describe: "sweet!", Price: 1})
	//trysometingjaaa
	// product, err := getProduct(2)

	// err = updateProduct(2, &Product{Describe: strPtr("4K quality Olivia Rodrigo's Portrait")})

	// err = deleteProduct(7)

	// products, err := getProducts()

	// if err != nil {
	// 	log.Fatal(err)
	// }

	// fmt.Println(products)
	// fmt.Println(product)
	// print("request Successful\n")
}

func getProductHandler(c *fiber.Ctx) error {

	productId, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	product, err := getProduct(productId)
	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	return c.JSON(product)
}

func createProductHandler(c *fiber.Ctx) error {
	p := new(Product)
	if err := c.BodyParser(p) ; err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	err := createProduct(p)

	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	return c.JSON("request Successful")
}

func updateProductHandler(c *fiber.Ctx) error {
	productId, err := strconv.Atoi(c.Params("id"))

	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	p := new(EditingProduct)
	if err := c.BodyParser(p) ; err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	err = updateProduct(productId, p)

	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	
	return c.JSON("request Successful")
}

func deleteProductHandler(c *fiber.Ctx) error {

	productId, err := strconv.Atoi(c.Params("id"))
	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	err = deleteProduct(productId)
	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	return c.JSON("request Successful")
}

func getProductsHandler(c *fiber.Ctx) error {
	products, err := getProducts()
	if err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}

	return c.JSON(products)
}
