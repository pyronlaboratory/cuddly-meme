import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;
import java.util.function.Predicate;

/**
 * Demonstrates functional programming concepts using lambdas, higher-order functions,
 * and stream processing. The class includes a `Runnable` that prints a message, a
 * `BinaryOperation` for calculating the sum of two integers, a list of strings
 * processed with various interfaces, and a `Consumer` that converts strings to
 * uppercase. These lambda expressions enable concise and flexible code execution.
 */
public class LambdaDemo {

    /**
     * Demonstrates several features of Java programming language, including lambda
     * expressions, method references, streams, and consumers. Lambda expression `hello`
     * prints "Hello, Lambda!", while method reference `add` performs addition and
     * calculates the result. The `names` list is processed using `forEach()` and `stream().filter()`.
     * 
     * @param args 0 or more command-line arguments passed to the `main` function when
     * it is executed directly from the command line, allowing the program to handle user
     * input and execute accordingly.
     * 
     * * Length: `args.length` = number of command-line arguments passed to the program.
     * * Elements: Each element in `args` is a string representing a command-line argument.
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
     * Defines an integer result calculation method for two input integers.
     */
    interface BinaryOperation {
        int calculate(int a, int b);
    }
}
