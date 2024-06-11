import prisma from "@/configuration/prisma";
import { Component } from "@prisma/client";

export async function createComponent(name:string, amountAvailable:number){

    // Check if a component with this name already exists
    const existingComponent = await prisma.component.findUnique({
        where: {
          name: name,
        },
    });
  
    // Throw error if an existing component with this name is found
    if (existingComponent) {
        throw new Error('Component with this name already exists. Try updating it instead.');
    }

    // Create a new component if it doesn't already exist
    const component = await prisma.component.create({
        data: {
            name: name,
            amountAvailable: amountAvailable,
        }
    });
    return component;
}