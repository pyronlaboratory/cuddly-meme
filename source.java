import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 * Provides examples of functional programming concepts such as lambdas, consumers,
 * and predicates. The main method defines several lambda expressions, including a
 * `Runnable` that prints "Hello, Lambda!", a `BinaryOperation` that calculates the
 * sum of two integers, and a `Consumer` that prints the uppercase version of a string.
 * These lambdas are used to manipulate lists of strings in various ways, such as
 * filtering and printing names that start with 'A'.
 */
public class LambdaDemo {

    /**
     * Demonstrates various aspects of Java programming, including lambda expressions,
     * method references, streams, and functional programming. It uses lambdas to print
     * a message and perform an addition calculation, and it shows how to use method
     * references to call a method and filter a list based on a condition.
     * 
     * @param args 0 or more command-line arguments passed to the `main()` function when
     * it is invoked.
     * 
     * * Length: `args.length`
     * * Elements: `Arrays.asList(args)`
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
     * Defines an operation that takes two integer parameters and returns an integer result.
     */
    interface BinaryOperation {
        int calculate(int a, int b);
    }
}
