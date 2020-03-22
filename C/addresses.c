#include <stdio.h>

int main(void)

{
    char s[10];
    printf("s: ");
    scanf("%s", s);
    char t[10];
    printf("t: ");
    scanf("%s", t);

    printf("s: %p\n", s);
    printf("t: %p\n", t);
}