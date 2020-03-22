#include <stdio.h>
#include <string.h>
#include <ctype.h>
#include <cs50.h>

int main(void)

{
    char *s = get_string("s: ");
    if (!s)
    {
        return 1;
    }

    // Allocate memory for another string
    char *t = malloc(strlen(s) + 1)  //sizeof(char) = 1
    
    // Copy string into memory allocated
    for (int i = 0, n = strlen(s); i <= n; i++)
    {
        t[i] = s[i];
    }

    // Capitalize first letter
    if (strlen(t) > 0)
    {
        t[0] = toupper(t[0])
    }

    printf("s: %s\n", s);
    printf("t: %s\n", t);
}