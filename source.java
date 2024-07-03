import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 * Demonstrates various functional programming concepts using lambdas, higher-order
 * functions, and stream processing. The class defines a `Runnable` instance that
 * prints "Hello, Lambda!" when run, a binary operation that calculates the sum of
 * two integers, and processes a list of strings using different functional interfaces.
 */
public class LambdaDemo {

    /**
     * Demonstrates various concepts in Java, including lambdas, method references,
     * streams, and Predicate/Consumer interfaces. It prints "Hello, Lambda!" using a
     * lambda expression, calculates the sum of 5 and 3 using a method reference, lists
     * the names "Alice", "Bob", and "Charlie", filters them based on a Predicate to
     * obtain names starting with 'A', and prints the uppercase versions of the names
     * using Consumers.
     * 
     * @param args program's command line arguments, which is not utilized in this code
     * snippet.
     * 
     * * Length: `args.length` is equal to 0 or 1.
     * * Elements: Each element in `args` is a String.
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
