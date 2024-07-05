import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 * Demonstrates various functional programming concepts using lambdas, higher-order
 * functions, and stream processing. The class includes a `Runnable` that prints a
 * message, a binary operation that calculates the sum of two integers, and a list
 * of strings processed using various functional interfaces. These lambda expressions
 * allow for concise and flexible code execution.
 */
public class LambdaDemo {

    /**
     * Demonstrates various aspects of Java programming: lambdas for functional programming,
     * method references for inline functions, list and stream APIs for handling collections,
     * and Predicate and Consumer interfaces for filtering and transforming data.
     * 
     * @param args program's command-line arguments, which are passed to the `main()`
     * method by the Java runtime environment when the program is launched from the command
     * line.
     * 
     * * `args` is an array of strings containing command-line arguments.
     * * Its main property is that it contains multiple strings as its elements.
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
     * Defines a method to calculate an integer result for two input integers.
     */
    interface BinaryOperation {
        int calculate(int a, int b);
    }
}
