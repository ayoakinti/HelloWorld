#include <stdio.h>

void chart (int score)
{
    for(int i = 0; i <= score; i++)
    {
        printf("#");
    }
    printf("\n");
}


int main ()

{
    // Get scores from users
    int scores1 = 100;
    int scores2 = 50;
    int scores3 = 75;

    // Chart scores
    for (int i = 0; i < scores1; i++)
    {
        printf("Score %i: ", i + 1);
        chart(i );
                
    }
    
}

