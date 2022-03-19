
#include <string>
using namespace std;

class Solution {
    
public:

    int scoreOfParentheses(string input) {

        const size_t size = input.length();
        int balance = 0;
        int totalScore = 0;

        for (int i = 0; i < size; i++) {
            if (input[i] == '(') {
                balance++;
                continue;
            }
            balance--;

            // (i-1)>=0 is not necessary because all parentheses are balanced.
            if (input[i - 1] == '(') {
                totalScore += (1 << balance);
            }
        }
        return totalScore;
    }
};
