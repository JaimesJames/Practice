package Company;
public class Accounting extends Employee {
    public String Skill = "Manage Account";
    public Accounting(String name, Double salary){
        super(name, salary);
        System.out.println("I'm Accounting");
    }

    public void bonus(){
        System.out.println("Bonus 30%");
    }
}
