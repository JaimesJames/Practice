package app

import (
	"database/sql"

	"github.com/JaimesJames/Practice/GoLang/walkthrough-5/graph/model"
)

type ProductService struct {
	DB *sql.DB
}

func (s *ProductService) GetProducts() ([]*model.Product, error) {
	rows, err := s.DB.Query("SELECT id, name, description, price FROM product")
	if err != nil {
		return nil, err
	}
	defer rows.Close()

	var products []*model.Product
	for rows.Next() {
		var u model.Product
		err := rows.Scan(&u.ID, &u.Name, &u.Description, &u.Price)
		if err != nil {
			return nil, err
		}
		products = append(products, &u)
	}
	return products, nil
}

func (s *ProductService) GetProductByID(id string) (*model.Product, error) {
	var product model.Product
	err := s.DB.QueryRow("SELECT id, name, description, price FROM product WHERE id = $1", id).Scan(&product.ID, &product.Name, &product.Description, &product.Price)
	if err != nil {
		return nil, err
	}
	return &product, nil
}

func (s *ProductService) CreateProduct(input model.NewProduct) (*model.Product, error) {
	var newProduct model.Product
	err := s.DB.QueryRow("INSERT INTO product (name, description, price) VALUES ($1, $2)", input.Name, input.Description, input.Price).Scan(&newProduct.ID, &newProduct.Name, &newProduct.Description, &newProduct.Price)
	if err != nil {
		return nil, err
	}
	return &newProduct, nil
}