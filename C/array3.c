#include <string.h>
#include <stdio.h>


const int COUNT = 3

void chart(int score)
{
    for (int i = 0; i < score; i++)
    {
        printf("#");
    }
    printf("\n");
}

int main(void)

{
    // Get scores from user
    int scores[COUNT];
    for (int i = 0; i < COUNT; i++)
    {
        scores[i] = get_int("Score %i: ", i + 1);

    }
    // Chart scores gotten
    for (int i = 0; i < COUNT; i++)
    {
        printf("Score %i: ", i + 1);
        chart(scores[i]);
    }
}

