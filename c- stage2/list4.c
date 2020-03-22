//Implements a list of numbers using a linked list

#include <stdio.h>
#include <stdlib.h>
#include <limits.h>

typedef struct node
{
    int number;
    struct node* next;
}
node;

int main(void)

{
    //memory for numbers
    node *numbers = NULL;

    //prompt for numbers (until EOF)    
    while (1)
    {
        //prompt for number
        int number;
        printf("Number:");
        scanf("%i", &number);

        //check for EOF
        if (number == INT_MAX)
        {
            break;
        }

        //Allocate space for number
        node *n = malloc(sizeof(node));
        if(!n)
        {
            return (1);
        }

        //Add number to list
        n->number = number;
        n->next = NULL;

        if (numbers)
        {
            for (node *ptr = numbers; ptr != NULL; ptr = ptr->next)
            {
                if (ptr->next == NULL)
                {
                    ptr->next = n;
                    break;
                }
            }
        }
        else
        {
            numbers = n;
        }
        
    }
}
