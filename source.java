import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
/**
 * Defines several methods and interfaces, including a `Runnable` for printing a
 * message, a `BinaryOperation` interface for calculating an integer result, a `List`
 * of strings for manipulating names, and `Predicate` and `Consumer` interfaces for
 * filtering and printing uppercase strings.
 */
public class Lambda {
    /**
     * Demonstrates various features of Java programming, including lambda expressions,
     * method references, streams, and predicates.
     * 
     * @param args 0 or more command-line arguments passed to the program when it is
     * executed, which are ignored in this case and have no effect on the function's execution.
     * 
     * * It is an array of strings representing the program's command-line arguments.
     * * Its size may vary depending on how the program was launched.
     * * Each element in the array corresponds to a separate argument passed to the program.
     */
    public static void main(String[] args) {
        Runnable hello = () -> System.out.println("Hello, Lambda!");
        hello.run();

        BinaryOperation add = (a, b) -> a + b;
        System.out.println("Addition result: " + add.calculate(5, 3));

        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Charlie");

        names.forEach(name -> System.out.println("Name: " + name));

        Predicate<String> startsWithA = s -> s.startsWith("A");
        System.out.println("Names starting with 'A':");
        names.stream().filter(startsWithA).forEach(System.out::println);

        Consumer<String> printUpperCase = s -> System.out.println(s.toUpperCase());
        System.out.println("Names in uppercase:");
        names.forEach(printUpperCase);
    }

    /**
     * Defines a single method, calculate(int, int), which calculates an integer result
     * for two input integers.
     */
    interface BinaryOperation {
        int calculate(int a, int b);
    }
}
