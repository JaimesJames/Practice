package Company;
abstract class Employee{
    private String id;
    private String name;
    private Double salary;

    static Double minSalary = 1200.0;

    public Employee(){
        System.out.println("I'm Employee");
    }
    public Employee(String id, String name){
        System.out.println("Create Object Complete");
    }
    public Employee(String name, Double salary){
        this.name = name;
        this.salary = salary;
        displayEmployee();
        // System.out.println("Create Object Complete");
    }
    public Employee(String id, String name, Double salary){
        this.id = id;
        this.name = name;
        this.salary = salary;
        displayEmployee();
        // System.out.println("Create Object Complete");
    }

    public void setId(String id) {
        this.id = id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public void setSalary(Double salary) {
        this.salary = salary;
    }

    public void displayEmployee(){
        System.out.println("ID = " + this.id);
        System.out.println("Name = " + this.name);
        System.out.println("Salary = " + this.salary);
    }
    
    public String getId() {
        return id;
    }
    public String getName() {
        return name;
    }
    public Double getSalary() {
        return salary;
    }

    public abstract void bonus();
}