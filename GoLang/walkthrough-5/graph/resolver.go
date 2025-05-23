package graph

import (
	"database/sql"

	"github.com/JaimesJames/Practice/GoLang/walkthrough-5/app"
)

// This file will not be regenerated automatically.
//
// It serves as dependency injection for your app, add any dependencies you require here.

type Resolver struct{
	DB *sql.DB
	ProductService *app.ProductService
}
