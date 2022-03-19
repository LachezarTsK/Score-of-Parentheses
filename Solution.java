
public class Solution {

    public int scoreOfParentheses(String input) {

        final int size = input.length();
        int balance = 0;
        int totalScore = 0;
        
        for (int i = 0; i < size; i++) {
            if (input.charAt(i) == '(') {
                balance++;
                continue;
            }
            balance--;
            
            // (i-1)>=0 is not necessary because all parentheses are balanced.
            if (input.charAt(i - 1) == '(') {
                totalScore += (1 << balance);
            }
        }
        return totalScore;
    }
}
