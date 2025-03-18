FROM golang:1.24.1

# Set environment variables
ENV GO111MODULE=on \
    CGO_ENABLED=0 \
    GOOS=linux \
    GOARCH=amd64

# Set the working directory inside the container
WORKDIR /app

# Copy go.mod and go.sum files to download dependencies first (better caching)
COPY go.mod go.sum ./
RUN go mod download

# Copy the main.go file
COPY main.go .

# Build the Go application
RUN go build -o main main.go

# Create a minimal runtime image
FROM alpine:latest
RUN apk --no-cache add ca-certificates
WORKDIR /root/

# Copy the compiled binary from the builder stage
COPY --from=builder /app/main .

# Expose the port Gin uses
EXPOSE 8080

# Command to run the executable
CMD ["./main"]
