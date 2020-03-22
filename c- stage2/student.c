#include <stdio.h>
#include <string.h>
#include <struct.h>

 int main(void)

 {
    //Allocate space for students
    int enrollment;
    printf("Enrollment: ");
    scanf("%i", &enrollment);
    student students[enrollment];

    //Prompt for students' names and dorms
    for (int i = 0; i < enrollment; i++)
    {
        students[i].name[20];
        printf("Name: ");
        scanf("%s", students[i].name);

        students[i].dorm[20];
        printf("Name: ");
        scanf("%S", students[i].dorm);
    }

    // Print students' name and dorm
    for (int i = 0; i < enrollment; i++)
    {
        printf("%s is in dorm %s\n", students[i].name, students[i].dorm); 
    }    
 }