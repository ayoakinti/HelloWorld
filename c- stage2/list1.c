#include <stdio.h>

int main(void)
{
    int capacity;
    do
    {
        printf("Capacity: ");
        scanf("%i", &capacity);
    }
    while (capacity < 1);
    
    int numbers[capacity];

    int size = 0;
    while (size < capacity)
    {
        int number;
        printf("Number: ");
        scanf("%i", &number);
        printf("The number imputted is %i\n", number);
        numbers[size] = number;
        size++;
    }

    for (int i = 0; i < size; i++)
    {
        printf("The number imputted is %i\n", numbers[i]);
    }
}