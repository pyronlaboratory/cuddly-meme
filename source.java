import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 * Has a main method that demonstrates various lambda expressions and their usage in
 * functional programming. The class includes a `Runnable` that prints a message to
 * the console, a `BinaryOperation` that calculates the sum of two integers, a `List`
 * of strings that are processed using a `Predicate`, and a `Consumer` that converts
 * strings to uppercase. These lambda expressions allow for concise and flexible code
 * execution.
 */
public class LambdaDemo {

    /**
     * Demonstrates various functional programming concepts in Java, including lambdas,
     * higher-order functions, and stream processing. Lambda expressions are used to
     * create a `Runnable` instance that prints "Hello, Lambda!" when run, while the `add`
     * method is a binary operation that takes two arguments and returns their sum. The
     * `names` list is processed using various functional interfaces, such as
     * `List<String>.forEach()` and `Stream.filter()`.
     * 
     * @param args 1-dimensional array of command-line arguments passed to the `main`
     * function by the Java runtime when the program is launched directly from the command
     * line, and it is ignored in this case as no operation is performed on it.
     * 
     * * `args`: an array of strings representing command-line arguments passed to the program.
     * * Length: varies (can be zero or more than zero).
     * * Elements: each element is a string representing a separate argument.
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
