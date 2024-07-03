import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
/**
 * Defines several methods and interfaces, including a `Runnable` for printing a
 * message, a `BinaryOperation` interface for calculating an integer result, and a
 * `List` of strings that can be iterated over using various predicates and consumers.
 */
public class Lambda {
    /**
     * Demonstrates various features of Java programming, including lambdas, methods
     * reference, and stream processing. A lambda expression prints "Hello, Lambda!",
     * while a method reference adds two numbers and calculates its result. The `names`
     * list is processed using the `forEach()` method and `filter()` method to print names
     * starting with "A" in uppercase.
     * 
     * @param args 0 or more command-line arguments passed to the `main` method when the
     * program is launched directly from the command line, and it is ignored in this case.
     * 
     * * Length: `args.length` returns the number of elements in the array.
     * * Elements: Each element in the array is a string, representing a command-line argument.
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
     * Defines a single method, calculate(int, int), to return an integer result for two
     * input integers.
     */
    interface BinaryOperation {
        int calculate(int a, int b);
    }
}
