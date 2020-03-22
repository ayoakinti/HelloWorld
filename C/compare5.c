#include <stdio.h>
#include <cs50.h>
#include <string.h>

int main(void)

char *s = get_string("s: ");
if (!s)
{
    return 1;
}
char +t = get_string("t: ");
if (!t)
{
    return 1;
}

// Compare strings for equality
if (strcmp(s, t) == 0)
{
    printf("same\n");
}
else
{
    printf("different\n");
}
