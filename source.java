import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
/**
 * Defines several methods and interfaces, including a `Runnable` for printing a
 * message, a `BinaryOperation` interface for calculating an integer result, and a
 * `Predicate` and `Consumer` for manipulating lists of strings. These methods
 * demonstrate the use of lambda expressions in Java for creating concise and expressive
 * code.
 */
public class Lambda {
    /**
     * Demonstrates various concepts in Java programming, including lambda expressions,
     * method references, streams, and consumer functions. Lambda expressions are used
     * to create a `Runnable` object that prints "Hello, Lambda!", while method references
     * are employed to implement an addition operator that takes two integers as input
     * and returns their sum. Streams are used to filter a list of strings based on a
     * provided predicate function, and consumer functions are applied to print the
     * uppercase versions of each string in a list.
     * 
     * @param args 0 or more command-line arguments passed to the program, which are
     * ignored in this case.
     * 
     * * Length: The `args` array has 0 or more elements, depending on the command-line
     * arguments passed to the program.
     * * Elements: Each element in the `args` array is a string representing a command-line
     * argument.
     * * Types: Each element in the `args` array can hold any type of string value.
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
     * Defines an operation that takes two integers and returns their integer result.
     */
    interface BinaryOperation {
        int calculate(int a, int b);
    }
}
