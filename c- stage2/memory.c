#include <stdio.h>
#include <stdlib.h>

void f(void);

int main(void)

{
    f();
}

void f(void)
{
    int *x = malloc(10 * sizeof(int));
    x[10] = 50;
    printf("The memory is %i\n", x[10]);
    free(x);
}