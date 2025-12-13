import java.util.ArrayList;
import java.util.Scanner;

public class StudentGradeTracker {

    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        ArrayList<Integer> grades = new ArrayList<>();

        System.out.print("Enter number of students: ");
        int n = sc.nextInt();

        for (int i = 0; i < n; i++) {
            System.out.print("Enter marks of student " + (i + 1) + ": ");
            grades.add(sc.nextInt());
        }

        int highest = grades.get(0);
        int lowest = grades.get(0);
        int sum = 0;

        for (int mark : grades) {
            sum += mark;
            if (mark > highest)
                highest = mark;
            if (mark < lowest)
                lowest = mark;
        }

        double average = (double) sum / n;

        System.out.println("\n----- Student Grade Summary -----");
        System.out.println("Total Students: " + n);
        System.out.println("Average Marks: " + average);
        System.out.println("Highest Marks: " + highest);
        System.out.println("Lowest Marks: " + lowest);

        sc.close();
    }
}
