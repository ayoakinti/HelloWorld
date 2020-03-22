#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

int main(void)

{
    
    int *numbers = NULL;
    int capacity = 0;    

    int size = 0; 
    while (1)
    {
        int number;
        printf("Number: ");
        scanf("%i", &number);         
                        
        if (number == INT_MAX)
        {
            break;
        }

        if (size == capacity)
        {
            numbers = realloc(numbers, sizeof(int) * (size + 1));
            capacity++;
        }
          
        numbers[size] = number;    
        size++;               
    }

    for (int i = 0; i < size; i++)
    {
        printf("You inputted %i\n", numbers[i]);
    }
    free(numbers);

}