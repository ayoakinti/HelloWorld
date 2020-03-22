#include<stdio.h>

int main(void) 

{
    int name = 1;
    int boy = 1;
    if (name < boy)
    {
        printf ("name is less than boy\n");
    }
    else if (name > boy)
    {
        printf ("boy is less than name\n");
    }
    else
    {
        printf ("name is equal to boy\n");
    }
    for (int i = 2; i < 50; i+= 5)
    {
        printf ("Hello World %i \n", i );
    }
    char str[] = "Man";
    printf ("%s\n", str);

 
}    