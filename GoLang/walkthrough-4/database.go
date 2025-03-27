package main

import (
	// "database/sql"
	"fmt"
	// "log"
	"strings"

	_ "github.com/lib/pq"
)

func createProduct(product *Product) error{


	_, err := db.Exec(
		"INSERT INTO public.products(name, describe, price) VALUES ($1, $2, $3);",product.Name, product.Describe, fmt.Sprintf("%.2f", product.Price))
	
	return err
}

func getProduct(id int) (Product, error){
	var p Product
	row := db.QueryRow(
		"SELECT id, name, describe, price FROM products WHERE id=$1", id,
	)

	err := row.Scan(&p.ID, &p.Name, &p.Describe, &p.Price)

	if err != nil {
		return Product{}, err
	}

	return p, nil
}

func getProducts() ([]Product, error){
	rows, err := db.Query("SELECT id, name, describe, price FROM products")

	if err != nil {
		return nil, err
	}

	var products []Product

	for rows.Next() {
		var p Product
		err := rows.Scan(&p.ID, &p.Name, &p.Describe, &p.Price)
		if err != nil {
			return nil, err
		}
		products = append(products, p)
	}

	if err = rows.Err(); err != nil{
		return nil, err
	}

	return products, nil
}

func updateProduct(id int, product *EditingProduct) error {

	var updates []string
	var args []interface{}
	argID := 1

	if product.Name != nil {
		updates = append(updates, fmt.Sprintf("name = $%d", argID))
		args = append(args, *product.Name)
		argID++
	}
	if product.Describe != nil {
		updates = append(updates, fmt.Sprintf("describe = $%d", argID))
		args = append(args, *product.Describe)
		argID++
	}
	if product.Price != nil {
		updates = append(updates, fmt.Sprintf("price = $%d", argID))
		args = append(args, *product.Price)
		argID++
	}
	mutation := fmt.Sprintf("UPDATE public.products SET %s WHERE id = $%d;",
		strings.Join(updates, ", "),
		argID,
	)
	args = append(args, id)

	_, err := db.Exec(mutation, args...)
	return err
}

func deleteProduct (id int) error{
	_, err := db.Exec("DELETE FROM public.products WHERE id = $1;",id)
	
	return err
}

func strPtr(s string) *string {
    return &s
}

func floatPtr(f float64) *float64 {
    return &f
}


