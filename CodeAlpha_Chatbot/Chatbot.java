import java.util.Scanner;

public class Chatbot {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("Hello! I am Chatbot. Ask me anything!");
        System.out.println("Type 'bye' to exit.\n");

        while (true) {
            System.out.print("You: ");
            String input = sc.nextLine().toLowerCase();

            // exit condition
            if (input.equals("bye") || input.equals("exit")) {
                System.out.println("Chatbot: Goodbye! Have a nice day!");
                break;
            }

            // rule-based responses (IF-ELSE LOGIC)
            String response = getResponse(input);
            System.out.println("Chatbot: " + response);
        }

        sc.close();
    }

    // Rule-based response method
    public static String getResponse(String input) {

        if (input.contains("hello") || input.contains("hi")) {
            return "Hello! How can I help you?";
        }

        if (input.contains("how are you")) {
            return "I'm just a program, but I'm doing great!";
        }

        if (input.contains("name")) {
            return "I am Chatbot, your simple Java assistant.";
        }

        if (input.contains("time")) {
            return "I can't show the real time, but you can check your device!";
        }

        if (input.contains("college")) {
            return "College is a place to learn, grow, and explore yourself.";
        }

        if (input.contains("java")) {
            return "Java is a popular, object-oriented programming language.";
        }

        if (input.contains("chatbot")) {
            return "A chatbot is a program that responds to user messages.";
        }

        // default response
        return "Sorry, I don't understand that yet. Try asking something else!";
    }
}
