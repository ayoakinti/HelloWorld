#include <string.h>
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    string s = get_string("Name: ");
    for (int n = 0; n < strlen(s); n++)
    {
        int i = (int) s[n];
        printf("%c %i\n", s[n] i);
    }
    // Another method 
    // Once the "i" is set to integer, program automatically replaces s[n] with integer number
    {
        printf("%c %i\n", s[n] s[n]);
        
    }
}