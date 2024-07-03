import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;
/**
 * Defines several methods and interfaces for manipulating integers and strings. The
 * `Runnable` `hello` prints "Hello, Lambda!" to the console, while the `BinaryOperation`
 * `add` calculates the sum of two integers. A list of strings is also defined and
 * processed using various methods, including filtering and printing in uppercase.
 */
public class Lambda {
    /**
     * Demonstrates various Java features such as lambdas, methods references, streams,
     * and Predicate classes to perform different operations on a collection of strings.
     * 
     * @param args array of command-line arguments passed to the program when it is
     * executed directly from the command line, and can be used to perform actions based
     * on their values.
     * 
     * * `args` is an array of strings representing command-line arguments passed to the
     * program.
     * * The length of `args` can vary depending on how the program was invoked.
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
     * Defines an int result calculation for two input integers.
     */
    interface BinaryOperation {
        int calculate(int a, int b);
    }
}
