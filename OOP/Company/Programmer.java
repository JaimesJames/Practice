package Company;
class Programmer extends Employee {
    
    public String Skill = "Programing";
    public Programmer(){
    }
    public Programmer(String name, Double salary){
        super(name, salary);
        System.out.println("I'm Programmer");
    }
    public void showProgrammer(){
        // setId("004");
        // setName("Jong");
        setSalary(1000000.0);
    }

    public void skill(){
        System.out.println("Have no skill");
    }

    public void skill(String...language){
        for(int i=0; i<language.length;i++){
            System.out.println("Skill : "+language[i]);
        }
        
    }
    
    public void bonus(){
        System.out.println("Bonus 20%");
    }
    
}
