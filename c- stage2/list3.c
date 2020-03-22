//list using a linked list

#include <stdio.h>
#include <stdlib.h>

struct node
{
    int number;
    struct node *next;
};

void printlist(struct node* n)
{
    while (n != NULL)
    {
        printf("%d\n", n->number);
        n = n->next;
    }
}

int main(void)
{
    struct node* head = NULL;
    struct node* second = NULL;
    struct node* last = NULL;

    head = (struct node*)malloc(sizeof(struct node));
    second = (struct node*)malloc(sizeof(struct node));
    last = (struct node*)malloc(sizeof(struct node));

    head->number = 5; //assign data in first node
    head->next = second; //link first node to the second node

    second->number = 7;
    second->next = last;

    last->number = 10;
    last->next = NULL;

    printlist(head); 

    return(0); 
}